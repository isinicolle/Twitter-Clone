import React from 'react'
import { PopulerIcon } from '../icons/icon'

const Content = () => {
  return (
    <main className='flex-1 bg-purple-200'>
      <header className='flex justify-between items-center
      p-4 border-b border-gray-extraLight'>
        <span className='font-bold text-x text-gray-900'> Home</span>
          <h1>
            <PopulerIcon 
            className='w-6 h-6 text-primary-base'
            />
            </h1>
       
      </header>
    </main>
  )
}

export default Content