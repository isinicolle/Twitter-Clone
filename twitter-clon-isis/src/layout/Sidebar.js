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
       <PopulerIcon/>
       <ImageIcon/>
       <GIFIcon/>
       <POLLIcon/>  
       <EmojiIcon/>
       <ScheduleIcon/>
       <ReplyIcon/>
       <ReTweetIcon/>
       <LikeIcon /> 
       <ShareIcon/>
       <SearchIcon/>
        </div>
  )
}

export default Sidebar