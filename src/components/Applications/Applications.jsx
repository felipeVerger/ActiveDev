import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io';


import { client } from '../../client';
import { postsQuery } from '../../utils/data';

import Application from './Application/Application';
import './Applications.css';

const Applications = ({ user }) => {
  const [applications, setApplications] = useState(null);
  const [openStage, setOpenStage] = useState(false);

  useEffect(() => {
    client.fetch(postsQuery)
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [user?._id])

  console.log(applications);

  return (
    <div>
      <h1>Your applications</h1>
      <button className='stages-btn' type='button' onClick={() => setOpenStage(!openStage)}>
        All stages
        {openStage ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
      </button>
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