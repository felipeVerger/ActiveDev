import React from 'react';
import createImg from '../../assets/create.png';

import Input from './Input';

import './CreateApplication.css';

const CreateApplication = () => {
  return (
    <div className='createApplication-container'>
      <h1>Create your application</h1>
      <div className='flex-row'>
        <div className='application-form-container'>
          <form className='application-form'>
            <div className='form-top'>
              <div className='form-top-left'>
                <Input
                  label='Title'
                  type='text'
                  name='title'
                />
                  <Input
                    label='Modality'
                    type='text'
                    name='modality'
                  />
                <Input
                  label='City'
                  type='text'
                  name='city'
                />
              </div>
              <Input
                label='Description'
                name='description'
              />
            </div>
            <div>
              <Input
                label='Company Name'
                name='company'
                type='text'
              />
            </div>
          </form>
        </div>
        <div>
          <img src={createImg} alt="creation-icon" className='creation-img'/>
        </div>
      </div>
    </div>
  )
}

export default CreateApplication