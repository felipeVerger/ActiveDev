import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Applications from '../../components/Applications/Applications';
import CreateApplication from '../../components/CreateApplication/CreateApplication';
import { fetchUser } from '../../utils/fetchUser';

import './Main.css';

const Main = () => {

  const user = fetchUser();

  return (
    <div className='main-container'>
      <Routes>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/add-application' element={<CreateApplication user={user}/>}/>
      </Routes>
    </div>
  )
}

export default Main