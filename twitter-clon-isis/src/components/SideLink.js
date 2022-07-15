import React from 'react'

export const SideLink = ({name, Icon}) => {
  return (
    <li className='group'>
        <a 
        href={name.toLowerCase()} 
        className='cursor-pointer block test-xl mb-2'>  
            <div className='inline-block'>
            <div className='flex items-center
           group-hover:bg-gray-extraLight
           group-hover:text-primary-base
           rounded-full
           pl-3
           pr-8
           py-3
           '>
                <Icon />
            <span className='ml-4 font-bold'>
                {name} </span>
            </div>
          </div>
        </a>
    </li>
  )
}
