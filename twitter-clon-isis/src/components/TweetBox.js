import React, {useState} from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, POLLIcon,ScheduleIcon} from '../icons/icon'
import db from '../db';
import firebase from 'firebase/compat/app';

export const TweetBox = () => {
    const [content, setContent] = useState('');

    const sendTweet = () => { 
        if(content !== '')
        {
            db.collection('feed').add({
                displayName: 'Isis Zapata',
                username: '@isisnicollee',
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "https://avatars.githubusercontent.com/u/92564676?v=4",
                avatar: "https://avatars.githubusercontent.com/u/92564676?v=4"
            });
            setContent('');
        }

    };

    return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
        <textarea
        className='w-full 
        text-xl
        placeholder-gray-dark
        outline-none
        overflow-hidden'
        placeholder='¿Que esta pasando?'
        onChange={(e) => setContent(e.target.value)}
        value={content}
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
        className='bg-primary-base text-white font-medium py-2 px-4 rounded-full' onClick={sendTweet}>
        Tweet
        </button>
        </div>
    </div>
  )
}

