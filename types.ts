export interface Hero {
    name : string,
    role : string,
    nationality : string,
    comp : string,
    weapon : string,
    abilities : string,
    ult : string,
    image : string,
    info: string,
}

export interface Map {
    name : string,
    image : string,
    top: string,
    location: string,
    type: string,
    attackComp: string,
    defenseComp: string,
}

export interface Review {
    stars: number,
    name: string,
    username: string,
    text: string,
}

export interface Team  {
    id:string,
    originalValues: {
        tank?: string;
        dps?: string;
        dps2?: string;
        support?: string;
        support2?: string;
        map: string;
        side: "Attack" | "Defense";
      },
    tank: Hero,
    dps: Hero,
    dps2: Hero,
    support: Hero,
    support2: Hero,
    map: Map,
    side: string,
    comp: string,
}

export interface Account{
    username: string,
    password: string,
}