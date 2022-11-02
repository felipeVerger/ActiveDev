import React from 'react'
import { Link } from 'react-router-dom';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import { HiDocument } from 'react-icons/hi';
import { RiUserFollowFill } from 'react-icons/ri';
import {AiOutlineMail, AiOutlineUser, AiFillCalendar} from 'react-icons/ai';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <nav className='sidebar-nav'>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to='/applications' className='sidebar-list-item-link'>
              <AiOutlineUser className='sidebar-icon'/>
              Your profile
            </Link>
          </li>
          <li>
            <Link to='/applications' className='sidebar-list-item-link'>
              <HiDocument className='sidebar-icon'/>
              Your applications
            </Link>
          </li>
          <li>
            <Link to='/applications' className='sidebar-list-item-link'>
              <BsFillBriefcaseFill className='sidebar-icon'/>
              Jobs for you
            </Link>
          </li>
          <li>
            <Link to='/applications' className='sidebar-list-item-link'>
              <AiOutlineMail className='sidebar-icon'/>
              Invitations
            </Link>
          </li>
          <li>
            <Link to='/applications' className='sidebar-list-item-link'>
              <AiFillCalendar className='sidebar-icon'/>
              Events
            </Link>
          </li>
          <li>
            <Link to='/applications' className='sidebar-list-item-link'>
              <RiUserFollowFill className='sidebar-icon'/>
              Following
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar