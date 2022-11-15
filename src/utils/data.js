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

export const modalityOptions = [
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'freelance', label: 'Freelance' }
]

export const conditionsOptions = [
  { value: 'fully-remote', label: 'Fully remote'},
  { value: 'partially-remote', label: 'Partially remote'},
  { value: 'flexible-hours', label: 'Flexible hours'},
  { value: 'informal-dress-code', label: 'Informal dress code'},
  { value: 'health-coverage', label: 'Health coverage'},
  { value: 'computer-provided', label: 'Computer provided'},
  { value: 'vacation', label: 'Vacation'},
  { value: 'pet-friendly', label: 'Pet friendly'},
  { value: 'accessible', label: 'Accessible'},
  { value: 'beverages-&-snacks', label: 'Beverages and snacks'},
]

export const statusOptions = [
  {value: 'sent', label: 'Sent'},
  {value: 'sent-incomplete', label: 'Sent but incomplete'},
  {value: 'process-finished', label: 'Process finished'},
]

export const userQuery = (email) => {
    const query = `*[_type == "user" && email == '${email}']`;
    return query;
};

export const getPostById = (id) => {
  const query = `*[_type == "post" && _id == '${id}']`;
  return query;
}

export const postsQuery = `*[_type == "post"] | order(_createdAt desc)`;