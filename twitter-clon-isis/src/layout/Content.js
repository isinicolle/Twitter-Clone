import React from 'react'
import { PopulerIcon } from '../icons/icon'

const Content = () => {
  return (
    <main className='flex-1 bg-purple-200'>
      <header>
        <span>
          <h1>
            Content
            <PopulerIcon 
            className='w-6 h-6 text-primary-base'
            />
            </h1>
        </span>
      </header>
    </main>
  )
}

export default Content