import React from 'react'
import { SearchIcon } from '../icons/icon'

const Widgets = () => {
  return (
    <aside className='w-80'>
      <div className='flex 
      items-center 
      space-x-4 
      p-3 m-3
       bg-gray-200 
       rounded-full
        text-gray-dark
        focus-within:bg-white
        focus-within:ring-l 
        focus-within:ring-blue-500
        '>
        <SearchIcon className='w-5 h-5' />
        <input type='text' 
        className='placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm' 
        placeholder='Search Twitter' />
      </div>
      <div>Timeline</div>
    </aside>
  )
}

export default Widgets