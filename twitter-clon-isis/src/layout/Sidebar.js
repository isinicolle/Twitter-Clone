import React from 'react'
import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon } from '../icons/icon';


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
        </div>
  )
}

export default Sidebar