import React from 'react'

const Input = ({type, label, name, value, placeholder, handleChange}) => {
  return (
    <label htmlFor={name} className='application-label flex-start'>
        {label}
        {name !== 'description' ? (
            <input
                type={type}
                id={name}
                name={name}
                className='application-input'
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        ) : (
            <textarea name={name} id={name} placeholder={placeholder} onChange={handleChange}/>
        )}
    </label>
  )
}

export default Input