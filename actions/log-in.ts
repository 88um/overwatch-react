'use server';

import { db } from "@/db/init";



export const logIn = async (username : string, password : string) =>{


  const acc = await db.data.accounts.find((account) => account.username.toLowerCase() == username.toLowerCase() && account.password == password)
  if (!acc){
    return {success:false, message: "Your account doesnt exist buddy"}
  }

  return {success:true, username: acc.username, message: "Account logged in."};

}

export const signUp = async (username : string, password : string) =>{


  const acc = await db.data.accounts.find((account) => account.username.toLowerCase() == username.toLowerCase() )
  if (acc){
    return {success:false, message: "Your account already exist buddy"}
  }

  const new_acc = {
    username: username,
    password: password
  }
  await db.data.accounts.push(new_acc);
  await db.write();
  return {success:true, message: "Account created", username: username};
}