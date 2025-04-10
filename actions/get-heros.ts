'use server'
import Fuse from 'fuse.js';
import { heroes } from "@/data"

export const getHero = async (name : string) =>{
    return heroes.find((hero) => hero.name === name);
}
const fuse = new Fuse(heroes, {
    keys: ['name', 'role', 'ability'],
    threshold: 0.4, // Lower = stricter match (0.0 = perfect match only)
  });

export const getAllHeros = async(query? : string)=>{

    if (!query) return heroes;
    const result =fuse.search(query);
    return result.map(r => r.item);
}

