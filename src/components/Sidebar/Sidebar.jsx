import React from 'react'
import { Link } from 'react-router-dom';

import { sidebarLinks } from '../../utils/data';

import './Sidebar.css';



const Sidebar = ({openSidebar}) => {

  return (
    <div className={openSidebar ? 'sidebar-container open' : 'sidebar-container'}>
      <nav className='sidebar-nav'>
        <ul className='sidebar-list'>
          {sidebarLinks.map((link) => (
            <li className='sidebar-list-item' key={link.text}>
              <Link to={link.to} className='sidebar-list-item-link'>
                {link.icon}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar