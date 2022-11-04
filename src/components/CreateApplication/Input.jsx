import React from 'react'

const Input = ({type, label, name}) => {
  return (
    <label htmlFor={name} className='application-label flex-start'>
        {label}
        {name !== 'description' ? (
            <input
                type={type}
                id={name}
                name={name}
                className='application-input'
            />
        ) : (
            <textarea name={name} id={name} />
        )}
    </label>
  )
}

export default Input