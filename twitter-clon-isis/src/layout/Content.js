import React, {useState} from 'react'
import { PopulerIcon } from '../icons/icon'
import { TweetBox } from '../components/TweetBox';
import { Divider } from '../components/Divider';


const Content = () => {
  return (
    <main className='flex-1 flex flex-col border-r border-l border-gray'>
      <header className='sticky top-0 z-10 bg-white flex justify-between items-center
      p-4 border-b border-gray-extraLight bg-white'>
        <span className='font-bold text-x text-gray-900'> Home</span>
          <h1>
            <PopulerIcon 
            className='w-6 h-6 text-primary-base'
            />
            </h1>
      </header>
      <div className='flex space-x-4 px-4 py-3'>
      <img src="https://avatars.githubusercontent.com/u/92564676?v=4" 
        alt="Profile"
        className='w-11 h-11 rounded-full'
        />
        <TweetBox />
      </div>
        <Divider />
    </main>
  )
}

export default Content