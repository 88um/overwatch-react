'use server'

import { reviews } from "@/data"
import { db } from "@/db/init"
import { getSession } from "@/lib/session"

export const getAllReviews = async () =>{
    const {reviews} = db.data
    return reviews;
}

export const addReview = async (text : string, author : string, rating: number) =>{
    const session = await getSession()
    if (!session){
        return {success: false, message : "Please log in first"}
    }
    await db.data.reviews.push({stars: Number(rating), name: author, text:text, username:session?.username});
    await db.write();
    return {success: true, message : "Successfully added review"}
}