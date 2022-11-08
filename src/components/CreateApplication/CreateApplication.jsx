import React, { useState } from 'react';
import {AiFillFolderAdd} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { client } from '../../client';
import { conditionsOptions, modalityOptions, statusOptions } from '../../utils/data';
import { Modal }from '../Modal/Modal';
import Select from 'react-select'
import Input from './Input';

import './CreateApplication.css';

const CreateApplication = ({ user }) => {
  const initialState = {
    title: '',
    modality: '',
    city: '',
    description: '',
    company: '',
    conditions: [],
    salary: '',
    status: '',
    date: '',
  }
  const [formData, setFormData] = useState(initialState);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const uploadImage = (e) => {
    const { type, name } = e.target.files[0];
    if(type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff'){
      setWrongImageType(false);

      client.assets
        .upload('image', e.target.files[0], { contentType: type, filename: name })
        .then((docuemnt) => {
          setCompanyLogo(docuemnt);
        })
        .catch((error) => {
          console.log('Image upload error: ' + error);
        })
    } else {
      setWrongImageType(true);
    }
  }


  const formValidation = (formData) => {
    let error = false;
    Object.entries(formData).forEach(([key, value]) => {
      if (value === "") {
        error = true;
      }
    });
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, modality, company, conditions, city, description, salary, status, date } = formData;
    console.log(conditions);
    if(formValidation(formData)){
      Modal('error', 'Something went wrong', 'All fields are required')
    } else {
      const doc = {
        _type: 'post',
        title,
        description,
        modality,
        business: company,
        businessLogo: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: companyLogo?._id
          }
        },
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
        .then(() => {
          Modal('success', 'Your application was created successfuly');
          resetForm();
          navigate('/applications')
      })
    }
  }

  const resetForm = () => {
    setFormData(initialState);
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
                  value={formData.title}
                  placeholder='Enter the title position'
                  handleChange={handleChange}
                />
                <label htmlFor="modality" className='select-label'>
                  Modality
                  <Select
                    className='select-input'
                    options={modalityOptions.map(modality => ({label: modality.label, value: modality.value}))}
                    onChange={(e) => setFormData({...formData, modality: e.value})}
                  />
                </label>
                <Input
                  label='City'
                  type='text'
                  name='city'
                  value={formData.city}
                  placeholder='Enter the city where the company is located or if it is remote'
                  handleChange={handleChange}
                />
              </div>
              <Input
                label='Description'
                name='description'
                type='text'
                value={formData.description}
                placeholder='Enter a description of the position you applied'
                handleChange={handleChange}
              />
            </div>
            <div className='form-medium'>
              <div className='form-medium-left flex-start-70'>
                <Input
                  label='Company Name'
                  name='company'
                  value={formData.company}
                  type='text'
                  handleChange={handleChange}
                />
                <label htmlFor="conditions" className='select-label'>
                  Conditions
                  <Select
                    className='select-input'
                    isMulti
                    options={conditionsOptions.map(condition => ({label: condition.label, value: condition.value}))}
                    onChange={(e) => setFormData({...formData, conditions: e.map(condition => (condition.value))})}
                  />
                </label>
                <Input
                  label='Salary'
                  name='salary'
                  type='text'
                  value={formData.salary}
                  handleChange={handleChange}
                />
                <div className='form-bottom-left'>
                  <label htmlFor="status" className='select-label'>
                    Status
                    <Select
                      className='select-input'
                      options={statusOptions.map(status => ({label: status.label, value: status.value}))}
                      onChange={(e) => setFormData({...formData, status: e.value})}
                    />
                  </label>
                  <Input
                    label='Date Send'
                    name='date'
                    type='date'
                    value={formData.date}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <label className="file-input flex-start" htmlFor='file'> 
                  Company Logo
                  <div className='file-input-block'>
                    <AiFillFolderAdd className={wrongImageType ? 'file-icon wrong-type' : 'file-icon'}/>
                    <p>{wrongImageType ? 'Wrong image type' : 'Click this block to add a picture'}</p>
                  </div>
                  <input type="file" id='file' name='companyLogo' onChange={uploadImage}/>
              </label>
            </div>
            <div className='form-btn-block'>
              <button type='button' onClick={() => resetForm()}>Reset</button>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default CreateApplication