import React from 'react'

import './Login.css';

const Input = ({type, name, label, handleChange, autoFocus }) => {
  return (
    <label htmlFor={label} className='login-label flex-start'>
        {label}
        <input
            className='login-input'
            name={name}
            type={type}
            id={label}
            onChange={handleChange}
            autoFocus={autoFocus}
        />
    </label>
  )
}

export default Input