'use server';
import { getTeams } from './create-team';

export const getTeam = async (id: string) => {
  try {
    const teams = await getTeams();
    const team = teams.find(t => t.id === id);
    
    return { 
      success: true, 
      team 
    };
  } catch (error) {
    console.error('Error getting team:', error);
    return { 
      success: false, 
      message: 'Failed to get team' 
    };
  }
};