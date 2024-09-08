import React from 'react'
import NavActions from './navActions'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'
import { currUser } from '@/lib/currUser'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import NavigationItem from './nav-item'
import { ModeToggle } from '../theme-toggle'
import { UserButton } from '@clerk/nextjs'

const NavigationSIdebar = async() => {
  const profile = await currUser();
  if(!profile){
    return redirect('/')
  }

  const servers = await db.server.findMany({
    where: {
      members:{
        some:{
          profileId: profile.id
        }
      }
    }
  })
  return (
    <div className='space-y-4 flex flex-col h-full items-center text-primary w-full bg-red dark:bg-[#1E1F22] py-3'>
        
        <NavActions/>
        <Separator className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto'/>
        <ScrollArea className='flex-1 w-full'>
          {servers.map((server)=>(
            <div key={server.id}>
              <NavigationItem id={server.id} Name={server.Name} imageUrl={server.imageUrl}/>

            </div>
          ))}
        </ScrollArea>
        <div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
          <ModeToggle/>
          <UserButton afterSwitchSessionUrl='/' appearance={{elements:{
            avatarBox: "h-[48px] w-[48px]"
          }}}/>
        </div>
       
        
      
    </div>
  )
}

export default NavigationSIdebar
