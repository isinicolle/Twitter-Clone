import React from 'react'

export const SideLink = ({name, Icon}) => {
  return (
    <li>
        <a href='#'>  
          <div className='flex items-center
           hover:bg-gray-extraLight
           hover:text-primary-base
           '>
            <span>
                <Icon />
            </span>
            <span className='ml-4 font-bold'>
                {name}
            </span>
          </div>
        </a>
    </li>
  )
}
