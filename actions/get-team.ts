'use server';


import { db } from "@/db/init";
import { Team } from "@/types";

export const getTeam = async (id: string) => {
  const team = db.data.teams.find((team) => team.id === id);
  if (!team) {
    return { success: false, message: "Team not found." };
  }
  return { success: true, team };
};