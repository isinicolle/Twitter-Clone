import React from 'react'

export const FeedItem = ({
    avatar,
    content,
    displayName,
    image,
    timestamp,
    username,
}) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
        <img src={avatar} 
        alt="Profile" 
        className="w-11 h-11 rounded-full" />
        <div className='flex items-center text-sm'>
            <h4 className="font-bold">{displayName}</h4>
            <span className="ml-2 text-gray-dark">{username}</span>
            <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full'/>
            <span className='text-gray-dark'>
                {timestamp.toDate().toLocaleTimeString("tr-TR")}
            </span>
        </div>
    </article>
  )
}
