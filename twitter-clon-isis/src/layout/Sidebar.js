import React from 'react'
import { BookmarksIcon, EmojiIcon, ExploreIcon, GIFIcon, HomeIcon, ImageIcon, LikeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, POLLIcon, PopulerIcon, ProfileIcon, ReplyIcon, ReTweetIcon, ScheduleIcon, SearchIcon, ShareIcon } from '../icons/icon';


const Sidebar = () => {
  return (
    <div className='w-72 bg-blue-200'>
       <HomeIcon/>
       <ExploreIcon/>
       <NotificationIcon/>
       <MessageIcon/>
       <BookmarksIcon/>
       <ListIcon/>
       <ProfileIcon/>
       <MoreIcon/>
       <PopulerIcon className="w-7 h-7"/>
       <ImageIcon className="w-7 h-7"/>
       <GIFIcon className="w-7 h-7"/>
       <POLLIcon className="w-7 h-7"/>  
       <EmojiIcon className="w-7 h-7"/>
       <ScheduleIcon className="w-7 h-7"/>
       <ReplyIcon className="w-7 h-7"/>
       <ReTweetIcon className="w-7 h-7"/>
       <LikeIcon className="w-7 h-7" /> 
       <ShareIcon className="w-7 h-7"/>
       <SearchIcon className="w-7 h-7"/>
        </div>
  )
}

export default Sidebar