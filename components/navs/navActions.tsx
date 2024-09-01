import { Plus } from 'lucide-react'
import React from 'react'

const NavActions = () => {
  return (
    <div>
        <button className='group flex items-center'>
            <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all justify-center overflow-hidden items-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500' > 
                <Plus className='group-hover:text-white transition text-emerald-500' size={25}/>
            </div>
        </button>
      
    </div>
  )
}

export default NavActions
