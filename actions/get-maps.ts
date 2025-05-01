'use server'
import Fuse from 'fuse.js';
import { db } from '@/db/init';





export const getAllMaps = async(query? : string)=>{
  const maps = db.data.maps;
  const fuse = new Fuse(maps, {
    keys: ['name', 'location', 'type', 'attackComp', 'defenseComp'],
    threshold: 0.4, // Lower = stricter match (0.0 = perfect match only)
  });
    if (!query) return maps;
    const result =fuse.search(query);
    return result.map(r => r.item);
}
