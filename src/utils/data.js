import { HiDocument } from 'react-icons/hi';
import {AiOutlineUser} from 'react-icons/ai';
import {IoIosAddCircle} from 'react-icons/io';

export const sidebarLinks = [
    {
      icon: <AiOutlineUser className='sidebar-icon'/>,
      text: 'Your profile',
      to: '/user-profile'
    },
    {
      icon: <HiDocument className='sidebar-icon'/>,
      text: 'Your applications',
      to: '/applications'
    },
    {
      icon: <IoIosAddCircle className='sidebar-icon'/>,
      text: 'Create application',
      to: '/add-application'
    },
]

export const userQuery = (email) => {
    const query = `*[_type == "user" && email == '${email}']`;
    return query;
};