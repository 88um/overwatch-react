
// File to handle the creation of a team

interface CreateTeamValues {
    tank?: string;
    dps?: string;
    dps2?: string;
    support?: string;
    support2?: string;
    map: string;
}
export const createTeam = async (values : CreateTeamValues) =>{
    return "Your team composition is: " + JSON.stringify(values);
}