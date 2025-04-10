'use server'

import { reviews } from "@/data"
import { db } from "@/db/init"

export const getAllReviews = async () =>{
    const {reviews} = db.data
    return reviews;
}

export const addReview = async (text : string, author : string, rating: number) =>{
    // This function would need authentication and authorization. Pretend its here

    await db.data.reviews.push({stars: Number(rating), name: author, text:text});
    await db.write();
    return {success: true, message : "Successfully added review"}
}