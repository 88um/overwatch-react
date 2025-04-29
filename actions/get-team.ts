'use server';
import { db } from "@/db/init";
import { isProduction } from "@/lib/utils";

export const getTeam = async (id: string) => {
    try {
      if (!isProduction()) {
        await db.read();
        const team = db.data.teams.find(t => t.id === id);
        if (!team) {
          return { success: false, message: 'Team not found' };
        }
        return { success: true, team };
      } else {
        const response = await fetch(`${process.env.URL}/team/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            return { success: false, message: 'Team not found' };
          }
          throw new Error('Failed to fetch team');
        }
  
        const team = await response.json();
        return { success: true, team };
      }
    } catch (error) {
      console.error('Error getting team:', error);
      return { 
        success: false, 
        message: 'Failed to get team' 
      };
    }
  };