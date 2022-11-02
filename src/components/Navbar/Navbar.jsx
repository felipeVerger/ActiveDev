import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsFillSunFill, BsFillMoonFill, BsFillBellFill } from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import Avatar from 'react-avatar';

import './Navbar.css';

const Navbar = ({ user, setTheme, theme }) => {

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className='header-container'>
        <div className='header-left-block'>
            <div className='header-brand flex-center'>
                <Link to='/' className='logo'>ActiveDev</Link>
                <button className='theme-button flex-center' onClick={switchTheme}>{theme === 'light' ? <BsFillSunFill className='sun'/> : <BsFillMoonFill className='moon'/> }</button>
            </div>
            <div className='header-search flex-center'>
                <AiOutlineSearch className='search-icon'/>
                <input
                    name='search'
                    type='text'
                    id='search'
                    placeholder='Search for jobs...'
                    autoComplete='off'
                />
            </div>
        </div>
        <div className='header-actions flex-center'>
            <div className='actions-links-block'>
                <a href='https://www.getonbrd.com/help' target='_blank' rel='noreferrer nofollow'>Help</a>
                <a href='https://www.getonbrd.com/blog/posts' target='_blank' rel='noreferrer nofollow'>Blog</a>
            </div>
            <div className='user-block'>
                <Avatar name={user?.username} round size='35'/>
                <span className='username'>{user?.username}</span>
            </div>
            <BsFillBellFill className='bell-icon'/>
        </div>
    </div>
  )
}

export default Navbar