import { Plus } from 'lucide-react'
import React from 'react'
import ActionTooltip from '../actionTooltip'

const NavActions = () => {
    //so you can give the parent element group and then use group-hover: thing afterward to atarget all
  return (
    <div>
      <ActionTooltip side='right' align='center' label='Add a Server'>
        <button className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all justify-center overflow-hidden items-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}

export default NavActions
