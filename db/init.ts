import { heroes, maps, reviews } from "@/data";
import { Hero, Map, Review } from "@/types";
import { JSONFilePreset } from "lowdb/node";

type Data = {
    maps : Map[]
    heroes : Hero[]
    reviews : Review[]
  }
  
const defaultData : Data = {maps: maps, heroes: heroes, reviews: reviews}

export const db = await JSONFilePreset<Data>('db.json', defaultData)

//export const db = await JSONFilePreset('db.json', { reviews: reviews,accounts: [{username:"",password:""}], maps : maps, heroes: heroes })
