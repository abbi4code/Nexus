import { currUser } from "@/lib/currUser";
import { db } from "@/lib/db";
import { memberrole } from "@prisma/client";
import { NextResponse } from "next/server";
import {v4 as uuidv4} from "uuid"

//for creating channels------------->
export async function POST(req: NextResponse){
    try {
        //now getting that body from the values
        const {name, imageUrl} = await req.json()
        const profile = await currUser()
        if(!profile){
            return new NextResponse("Unauthorized",{status: 401})
        }

        const server = await db.server.create({
            data:{
                profileId: profile.id,
                imageUrl,
                Name:name,
                inviteCode: uuidv4(),
                channels: {
                    create:[
                        {profileId:profile.id, Name:"General"}
                    ]
                },
                members: {
                    create:[
                        {profileId:profile.id, role: memberrole.ADMIN}
                    ]
                }

            }
        })

        return NextResponse.json(server)


        
    } catch (error) {
        console.log("POST ERR",error)
        return new NextResponse("Internal Server Error", {status: 500})
        
    }
}