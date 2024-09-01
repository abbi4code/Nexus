import NavigationSIdebar from '@/components/navs/nav-sidebar'
import { currUser } from '@/lib/currUser'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const profile = await currUser()
    if(!profile){
        return redirect("/")
    }

    const servers = await db.server.findMany({
        where:{
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    })
    // console.log(servers)
  return (
    <div>
        hi theredf
        {/* <NavigationSIdebar/> */}
      
    </div>
  )
}

export default page
