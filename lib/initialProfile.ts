import React from 'react'
import { currentUser,redirectToSignIn } from '@clerk/nextjs/server'
import { db } from './db';

export async function initialProfile() {
    const user = await currentUser();
    if(!user){
        return redirectToSignIn()
    }
    const profile = await db.profile.findUnique({
        where:{
            userId: user.id
        }
    })
    if(profile){
        return profile
    }
    const newProfileUser = await db.profile.create({
        data:{
            userId: user.id,
            Name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl
            

        }
    })

    return newProfileUser
  
}
