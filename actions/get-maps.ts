'use server'

import { heroes } from "@/data"

export const getHero = async (name : string) =>{
    return heroes.find((hero) => hero.name === name);
}

export const getAllHeros = async () =>{
    return heroes;
}
