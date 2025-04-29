"use client";

import { Hero, Map } from "@/types";
import { heroes, maps } from "@/data";

interface CreateTeamValues {
  tank?: string;
  dps?: string;
  dps2?: string;
  support?: string;
  support2?: string;
  map: string;
  side: "Attack" | "Defense";
}

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

  const compCounts: Record<string, number> = {};
  selectedHeroes.forEach((hero) => {
    if (hero.comp) {
      compCounts[hero.comp] = (compCounts[hero.comp] || 0) + 1;
    }
  });

  const comps = Object.entries(compCounts);
  comps.sort((a, b) => b[1] - a[1]);
  const [topComp, topCount] = comps[0] || [];

  const mapData = allMaps.find((m) => m.name === values.map);
  let mapPreferredComp: string | undefined = undefined;

  if (mapData) {
    mapPreferredComp =
      values.side === "Attack" ? mapData.attackComp : mapData.defenseComp;
  }

  let finalComp = topComp;
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

  if (!values.tank) {
    suggestedHeroes.tank = findHero("Tank");
  }
  if (!values.dps) {
    suggestedHeroes.dps = findHero("DPS");
  }
  if (!values.dps2) {
    suggestedHeroes.dps2 = findHero("DPS");
  }
  if (!values.support) {
    suggestedHeroes.support = findHero("Support");
  }
  if (!values.support2) {
    suggestedHeroes.support2 = findHero("Support");
  }

  //This needs formatted.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! please
let result = `Suggested comp: ${finalComp}`;
result += `<br>Map: ${values.map} (${values.side})`;
result += `<br>Tank: ${values.tank || suggestedHeroes.tank?.name || "No pick"}`;
result += `<br>DPS 1: ${values.dps || suggestedHeroes.dps?.name || "No pick"}`;
result += `<br>DPS 2: ${values.dps2 || suggestedHeroes.dps2?.name || "No pick"}`;
result += `<br>Support 1: ${values.support || suggestedHeroes.support?.name || "No pick"}`;
result += `<br>Support 2: ${values.support2 || suggestedHeroes.support2?.name || "No pick"}`;

return result;

};
