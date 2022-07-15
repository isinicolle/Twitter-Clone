import React from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, POLLIcon,ScheduleIcon} from '../icons/icon'

export const TweetBox = () => {
    return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
        <textarea
        className='w-full 
        text-xl
        placeholder-gray-dark
        outline-none
        overflow-hidden'
        placeholder='¿Que esta pasando?'
        />
        <div className='flex items-center justify-between'>
            <div className='flex -ml-3'>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-Lightest'>
                <ImageIcon className="w-6 h-6 text-primary-light" />
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-Lightest'>
                <GIFIcon className="w-6 h-6  text-primary-light"/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-Lightest'>
                <POLLIcon className="w-6 h-6  text-primary-light"/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-Lightest'>
                <EmojiIcon  className="w-6 h-6  text-primary-light" />
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-Lightest'>
                <ScheduleIcon className="w-6 h-6  text-primary-light" />
            </div>
            </div>
        <button
        className='bg-primary-base text-white font-medium py-2 px-4 rounded-full'>
        Tweet
        </button>
        </div>
    </div>
  )
}

