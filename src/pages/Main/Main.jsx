import React from 'react'
import { Routes, Route } from 'react-router-dom'
import unauthoizedImage from '../../assets/unauthorized.png';

import ApplicationDetail from '../../components/Applications/Application/ApplicationDetail/ApplicationDetail';
import Applications from '../../components/Applications/Applications';
import CreateApplication from '../../components/CreateApplication/CreateApplication';
import { fetchUser } from '../../utils/fetchUser';

import './Main.css';

const Main = () => {

  const user = fetchUser();

  return (
    <div className='main-container'>
        {user ? (
          <Routes>
            <Route path='/applications' element={<Applications user={user}/>}/>
            <Route path='/applications/:id' element={<ApplicationDetail/>}/>
            <Route path='/add-application' element={<CreateApplication user={user}/>}/>
          </Routes>
        ) : (
          <div className='unauthorized-block'>
            <img src={unauthoizedImage} alt="unauthoized" />
            <p>To access this funcionalities you have to be logged in</p>
          </div>
        )
        }
    </div>
  )
}

export default Main