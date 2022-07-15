import React from 'react'
import { SideLink } from '../components/SideLink';
import { UserBox } from '../components/UserBox';
import { BookmarksIcon, EmojiIcon, ExploreIcon, GIFIcon, HomeIcon, ImageIcon, LikeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, POLLIcon, PopulerIcon, ProfileIcon, ReplyIcon, ReTweetIcon, ScheduleIcon, SearchIcon, ShareIcon } from '../icons/icon';
import TwitterLogo from '../images/twitter.svg';

const sideLinks = [
{
  name: 'Home',
  icon: HomeIcon,
},
{
  name: 'Explore',
  icon: ExploreIcon,
},
{
  name: 'Notifications',
  icon: NotificationIcon,
},
{
  name: 'Messages',
  icon: MessageIcon,
},
{
  name: 'Bookmarks',
  icon: BookmarksIcon,
},
{
  name: 'Lists',
  icon: ListIcon,
},
{
  name: 'Profile',
  icon: ProfileIcon,
},
{
  name: 'Moments',
  icon: ScheduleIcon,
},
{
  name: 'More',
  icon: MoreIcon,
}



]

const Sidebar = () => {
  const [active, setActive] = React.useState('Home');

  const handleMenuClick =  (name) => {
    setActive(name);
  }

  return (
    <div className='flex flex-col justify-between w-72 px-2'>
      <div> 
        <div className='mt-1 mb-4 ml-1
        flex items-center
        justify-center
        w-12 h-12
        rounded-full
        hover:bg-gray-Lightest
        transform
        transition-colors duration-200
        '> 
        <img src={TwitterLogo} alt='Twitter' 
      className='w-9 h-9' />
        </div>
           <nav className='mb-4'>
        <ul>
          {sideLinks.map(({ name, icon }) => (
          <SideLink key={name} name={name} 
          Icon={icon} 
          active={active}
          onMenuClick={handleMenuClick}
          />
          ))}
        </ul>
      </nav>
      <button
      className='bg-primary-base
       hover:bg-primary-dark
        text-white shadow-lg  
        rounded-full 
        py-3 
        px-8 
        w-11/12
        transform transition-colors
        duration-700'>
        Tweet
      </button>
      </div>
      <UserBox/>
        </div>
  )
}

export default Sidebar