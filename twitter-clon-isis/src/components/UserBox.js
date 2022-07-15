import React from 'react'

export const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 
    hover:bg-gray-extraLight
    cursor-pointer
    rounded-full
    py-2
    px-4
    transform
    transition-colors
    duration-200'>
        <img src="https://avatars.githubusercontent.com/u/92564676?v=4" 
        alt="Profile"
        className='w-11 h-11 rounded-full'
        />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">Isis Zapata</span>
                <span className="text-sm text-gray-dark">@isinicolle</span>
            </div>
        
        <div className='flex space-x-1'>
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        <div className='w-1 h-1 bg-gray-900 rounded-full' />
        </div>
        
    </div>
  );
};

export default UserBox;
