import { heroes, maps, reviews } from "@/data";
import { JSONFilePreset } from "lowdb/node";


export const db = await JSONFilePreset('db.json', { reviews: reviews,accounts: [{username:"",password:""}], maps : maps, heroes: heroes })
