import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';


import Loader from '../Loader/Loader';
import { client } from '../../client';
import { postsQuery } from '../../utils/data';

import Application from './Application/Application';
import './Applications.css';

const Applications = ({ user }) => {
  const [applications, setApplications] = useState(null);
  const [openStage, setOpenStage] = useState(false);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFilters = (e) => {
    setFilters(e.target.value);
  }

  useEffect(() => {
    client.fetch(postsQuery)
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if(!applications?.length) return <Loader/>
  return (
    <div>
      <h1>Your applications</h1>
      <button className='stages-btn' type='button' onClick={() => setOpenStage(!openStage)}>
        All stages
        {openStage ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
      </button>
      {openStage && (
        <div className='stages-block'>
          <form className='stages-filters'>
            <label htmlFor="sent"> 
              <input type="checkbox" id="sent" name="sent" value="sent" onChange={handleFilters}/>
              Sent
            </label>
            <label htmlFor="sentButIncomplete">
              <input type="checkbox" id="sentButIncomplete" name="sentButIncomplete" value="sentButIncomplete" onChange={handleFilters}/>
              Sent but incomplete
            </label>
            <label htmlFor="finished">
              <input type="checkbox" id="finished" name="finished" value="finished" onChange={handleFilters}/>
              Process finished
            </label>
            <button className='stage-btn'>Save</button>
          </form>
        </div>
      )}
      <table className='list'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Modality</th>
            <th>Company</th>
            <th>City</th>
            <th></th>
            <th>Salary</th>
            <th>Status</th>
            <th>Date sent</th>
          </tr>
        </thead>
        {applications?.filter((a) => a.postedBy._ref === user._id).map((application) => (
          <Application application={application} key={application._id}/>
        ))}
      </table>
    </div>
  )
}

export default Applications