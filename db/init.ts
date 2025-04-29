import { heroes, maps, reviews } from "@/data";
import { Account, Hero, Map, Review, Team } from "@/types";
import { JSONFilePreset } from "lowdb/node";

type Data = {
    maps : Map[]
    heroes : Hero[]
    reviews : Review[],
    teams : Team[]
    accounts:Account[]
  }


  
const defaultData : Data = {maps: maps, 
    heroes: heroes, 
    reviews: reviews, 
    teams:[],
    accounts: []
}

export const db = await JSONFilePreset<Data>('db.json', defaultData)

//export const db = await JSONFilePreset('db.json', { reviews: reviews,accounts: [{username:"",password:""}], maps : maps, heroes: heroes })
