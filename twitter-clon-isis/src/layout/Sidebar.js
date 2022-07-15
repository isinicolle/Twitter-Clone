import React from 'react'
import { BookmarksIcon, EmojiIcon, ExploreIcon, GIFIcon, HomeIcon, ImageIcon, LikeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, POLLIcon, PopulerIcon, ProfileIcon, ReplyIcon, ReTweetIcon, ScheduleIcon, SearchIcon, ShareIcon } from '../icons/icon';
import TwitterLogo from '../images/twitter.svg';

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between w-72 bg-blue-200 px-2'>
      <div> <img src={TwitterLogo} alt='Twitter' 
      className='w-9 h-9' />
           <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            Explore
          </li>
        </ul>
      </nav>
      <button
      className='bg-primary-base
       hover:bg-primary-dark
        text-white shadow-lg  
        rounded-full 
        py-3 
        px-8 
        w-11/12'>
        Tweet
      </button>
      </div>
 
      <div>
       a
      </div>
        </div>
  )
}

export default Sidebar