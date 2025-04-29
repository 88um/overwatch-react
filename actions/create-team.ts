'use server';
import { Hero, Map, Team } from "@/types";
import { heroes, maps } from "@/data";
import { db } from "@/db/init";
import { isProduction } from "@/lib/utils";

interface CreateTeamValues {
  tank?: string;
  dps?: string;
  dps2?: string;
  support?: string;
  support2?: string;
  map: string;
  side: "Attack" | "Defense";
}

const generateId = (): string => {
  return `team-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};
// Store teams in memory when in production
let productionTeams: Team[] = [];

export const createTeam = async (values: CreateTeamValues) => {
  const allHeroes: Hero[] = heroes;
  const allMaps: Map[] = maps;

  // Validate input heroes
  const pickedHeroNames = new Set<string>(
    [
      values.tank,
      values.dps,
      values.dps2,
      values.support,
      values.support2,
    ]
      .filter((name) => name && name.trim() !== "") as string[]
  );

  const selectedHeroes = allHeroes.filter((hero) =>
    pickedHeroNames.has(hero.name)
  );

  // Check if all specified heroes exist
  for (const heroName of pickedHeroNames) {
    if (!selectedHeroes.some((hero) => hero.name === heroName)) {
      return { success: false, message: `Hero "${heroName}" not found.` };
    }
  }

  // Validate input map
  const mapData = allMaps.find((m) => m.name === values.map);
  if (!mapData) {
    return { success: false, message: `Map "${values.map}" not found.` };
  }

  // Calculate comp counts
  const compCounts: Record<string, number> = {};
  selectedHeroes.forEach((hero) => {
    if (hero.comp) {
      compCounts[hero.comp] = (compCounts[hero.comp] || 0) + 1;
    }
  });

  const comps = Object.entries(compCounts);
  comps.sort((a, b) => b[1] - a[1]);
  const [topComp] = comps[0] || [];

  let mapPreferredComp: string | undefined = undefined;

  if (mapData) {
    mapPreferredComp =
      values.side === "Attack" ? mapData.attackComp : mapData.defenseComp;
  }

  // Fallback logic for finalComp
  let finalComp = topComp || mapPreferredComp || "Default Comp";

  if (comps.length > 1 && comps[0][1] === comps[1][1]) {
    if (mapPreferredComp) {
      finalComp = mapPreferredComp;
    }
  }

  const suggestedHeroes: Partial<Record<keyof CreateTeamValues, Hero | undefined>> = {};

  const findHero = (role: string): Hero | undefined => {
    const availableHeroes = allHeroes.filter(
      (h) => h.role === role && h.comp === finalComp && !pickedHeroNames.has(h.name)
    );
    if (availableHeroes.length === 0) return undefined;
    const hero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)];
    pickedHeroNames.add(hero.name);
    return hero;
  };

  const team: Team = {
    id: generateId(), // Use the custom ID generation function
    originalValues: values,
    tank: allHeroes.find((h) => h.name === values.tank) || findHero("Tank")!,
    dps: allHeroes.find((h) => h.name === values.dps) || findHero("DPS")!,
    dps2: allHeroes.find((h) => h.name === values.dps2) || findHero("DPS")!,
    support: allHeroes.find((h) => h.name === values.support) || findHero("Support")!,
    support2: allHeroes.find((h) => h.name === values.support2) || findHero("Support")!,
    map: mapData!,
    side: values.side,
    comp: finalComp,
  };

  try {
    if (!isProduction()) {
      db.data.teams.push(team);
      await db.write();
    } else {
      const response = await fetch(`${process.env.URL}/team`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(team),
      });

      if (!response.ok) {
        if (response.status === 400) {
          return { success: false, message: 'Team ID already exists' };
        }
        throw new Error('Failed to create team');
      }
    }

    return { success: true, id: team.id };
  } catch (error) {
    console.error('Error saving team:', error);
    return { 
      success: false, 
      message: 'Failed to save team' 
    };
  }
};

// Add a function to get teams that works in both environments
export const getTeams = async () => {
  if (isProduction()) {
    return productionTeams;
  } else {
    await db.read();
    return db.data.teams;
  }
};