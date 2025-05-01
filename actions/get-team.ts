'use server';


import { db } from "@/db/init";


export const getTeam = async (id: string) => {
    //console.log(db.data.teams)
  
  const team = await db.data.teams.find((team) => team.id === id);
  if (!team) {
    return { success: false, message: "Team not found." };
  }
  return { success: true, team };
};