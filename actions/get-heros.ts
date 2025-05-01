'use server'
import Fuse from 'fuse.js';
import { db } from '@/db/init';


export const getAllHeros = async(query? : string)=>{
  const heroes = db.data.heroes;
  const fuse = new Fuse(heroes, {
    keys: ['name', 'role', 'abilities', 'ult', 'comp'],
    threshold: 0.4, // Lower = stricter match (0.0 = perfect match only)
  });

    if (!query) return heroes;
    const result =fuse.search(query);
    return result.map(r => r.item);
}

