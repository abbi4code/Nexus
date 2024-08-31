import React from 'react'
import { redirect } from 'next/navigation'
import {initialProfile} from '@/lib/initialProfile'
import { db } from '@/lib/db'
import InitialModal from '@/components/modals/initialModal'

export default async function page() {
    const profile = await initialProfile()

    const server = await db.server.findFirst({
        where:{
            members:{
                some:{
                    //@ts-ignore
                    profileId: profile.id
                }
            }
           
        }
    })
    if(server){
        return redirect(`/servers/${server.id}`)
    }


  return <InitialModal/>
}
