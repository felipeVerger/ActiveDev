import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../Main/Main';
import { fetchUser } from '../../utils/fetchUser';

import './Home.css';

const Home = () => {
  const [theme, setTheme] = useState('theme' ? 'light' : 'dark');
  const navigate = useNavigate();
  const user = fetchUser();

  useEffect(() => {
    navigate('/applications')
  }, [])

  return (
    <div className='home-container' data-theme={theme}> 
      <Navbar user={user && user} setTheme={setTheme} theme={theme}/>
      <div className='body-wrapper'>
        <div className='backdrop'/>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  )
}

export default Home