'use server'
import Fuse from 'fuse.js';
import { maps } from "@/data"


const fuse = new Fuse(maps, {
    keys: ['name'],
    threshold: 0.4, // Lower = stricter match (0.0 = perfect match only)
  });


export const getAllMaps = async(query? : string)=>{

    if (!query) return maps;
    const result =fuse.search(query);
    return result.map(r => r.item);
}
