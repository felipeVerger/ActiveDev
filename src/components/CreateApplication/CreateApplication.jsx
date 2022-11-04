import React, { useState } from 'react';
import {AiFillFolderAdd} from 'react-icons/ai';
import Swal from 'sweetalert2';

import { client } from '../../client';
import Input from './Input';

import './CreateApplication.css';

const CreateApplication = ({ user }) => {
  const [formData, setFormData] = useState({
    title: '',
    modality: '',
    city: '',
    description: '',
    company: '',
    conditions: '',
    salary: '',
    status: '',
    date: '',
  });
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, modality, company, conditions, city, description, salary, status, date } = formData;

    if(Object.values(formData) === ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    } else {
      const doc = {
        _type: 'post',
        title,
        description,
        modality,
        business: company,
        businessLogo: companyLogo,
        city,
        conditions,
        salary,
        status,
        dateSend: date,
        postedBy: {
          _type: 'postedBy',
          _ref: user._id
        },
      }
      
      client.create(doc)
        .then(() => 
          Swal.fire({
            icon: 'success',
            text: 'Your application was successfully created',
            timer: 1500
          })
        )
    }
    
  }

  return (
    <div className='createApplication-container'>
      <h1>Create your application</h1>
        <div className='application-form-container'>
          <form onSubmit={handleSubmit} className='application-form' autoComplete='off'>
            <div className='form-top'>
              <div className='form-top-left flex-start-70'>
                <Input
                  label='Title'
                  type='text'
                  name='title'
                  placeholder='Enter the title position'
                  handleChange={handleChange}
                />
                  <Input
                    label='Modality'
                    type='text'
                    name='modality'
                    placeholder='Enter the modality of your application. Ex: full-time'
                    handleChange={handleChange}
                  />
                <Input
                  label='City'
                  type='text'
                  name='city'
                  placeholder='Enter the city where the company is located or if it is remote'
                  handleChange={handleChange}
                />
              </div>
              <Input
                label='Description'
                name='description'
                type='text'
                placeholder='Enter a description of the position you applied'
                handleChange={handleChange}
              />
            </div>
            <div className='form-medium'>
              <div className='form-medium-left flex-start-70'>
                <Input
                  label='Company Name'
                  name='company'
                  type='text'
                  handleChange={handleChange}
                />
                <Input
                  label='Conditions'
                  name='conditions'
                  type='text'
                  handleChange={handleChange}
                />
                <Input
                  label='Salary'
                  name='salary'
                  type='text'
                  handleChange={handleChange}
                />
                <div className='form-bottom-left'>
                  <Input
                    label='Status'
                    name='status'
                    type='text'
                    handleChange={handleChange}
                  />
                  <Input
                    label='Date Send'
                    name='date'
                    type='date'
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <label className="file-input flex-start" htmlFor='file'> 
                  Company Logo
                  <div className='file-input-block'>
                    <AiFillFolderAdd className='file-icon'/>
                    <p>Click this block to add a picture</p>
                  </div>
                  <input type="file" id='file' name='companyLogo' onChange={(e) => setCompanyLogo(e.target.value)}/>
              </label>
            </div>
            <div className='form-btn-block'>
              <button type='button'>Reset</button>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default CreateApplication