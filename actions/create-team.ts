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

export const createTeam = async (values: CreateTeamValues) => {
  const allHeroes: Hero[] = heroes;
  const allMaps: Map[] = maps;

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

  for (const heroName of pickedHeroNames) {
    if (!selectedHeroes.some((hero) => hero.name === heroName)) {
      return { success: false, message: `Hero "${heroName}" not found.` };
    }
  }

  const mapData = allMaps.find((m) => m.name === values.map);
  if (!mapData) {
    return { success: false, message: `Map "${values.map}" not found.` };
  }

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
    id: generateId(),
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
  
  await db.data.teams.push(team);

  if (!db.data.teams) {
    db.data.teams = [];
  }

  db.data.teams.push(team);
  await db.write();
  
 

  return { success: true, id: team.id }; 
};