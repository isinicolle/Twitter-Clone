import React from 'react'
import { SearchIcon } from '../icons/icon'
import { Timeline } from 'react-twitter-widgets'

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
        focus-within:ring-1
        focus-within:ring-blue-500
        focus-within:text-base
        '>
        <SearchIcon className='w-5 h-5' />
        <input type='text' 
        className='placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm' 
        placeholder='Search Twitter' />
      </div>
      <div className='mt-5'>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "isinicollee",
            }}
            options={{
              height: '1000'
            }}
          />
      </div>
    </aside>
  )
}

export default Widgets