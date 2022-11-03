import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Applications from '../../components/Applications/Applications';
import CreateApplication from '../../components/CreateApplication/CreateApplication';

import './Main.css';

const Main = () => {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/add-application' element={<CreateApplication/>}/>
      </Routes>
    </div>
  )
}

export default Main