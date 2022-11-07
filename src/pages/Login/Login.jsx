import React, { useState } from 'react';
import {BsShieldLockFill} from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';

import { userQuery } from '../../utils/data';
import { client } from '../../client';
import Input from './Input';

import './Login.css';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, email, password, image} = formData;

    if (isLoggedIn) {
        const query = userQuery(email);

        client.fetch(query)
            .then((res) => {
                if(res[0]?.email === email && res[0]?.password === password) {
                    localStorage.setItem('user', JSON.stringify(res));
                    navigate('/');
                }
            })
            .catch((err) => {
                console.log(err);
                setError('Something went wrong, please try again')
            })

    } else {
        const doc = {
            _id: uuidv4(),
            _type: 'user',
            username,
            email,
            password,
            image
        }
        client.createIfNotExists(doc)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert('Something went wrong')
            })
    }
  }

  const switchMode = () => {
    setFormData({username: '', email: '', password: '', confirmPassword: '', image: ''});
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="login-container flex-center">
      <div className="login-paper">
        <h4 className="login-title flex-center">
          {isLoggedIn ? "Sign In" : "Sign Up"}{" "}
          <BsShieldLockFill className="lock-svg" />
        </h4>
        <form className="login-form flex-start" onSubmit={handleSubmit}>
          {!isLoggedIn && (
            <Input
              type="text"
              name="username"
              autoFocus={true}
              handleChange={handleChange}
              label="username"
            />
          )}
          <Input
            type="email"
            name="email"
            handleChange={handleChange}
            label="email"
          />
          <Input
            type="password"
            name="password"
            handleChange={handleChange}
            label="password"
          />
          {!isLoggedIn && (
            <>
                <Input
                    type='password'
                    name='confirmPassword'
                    label='confirm Password'
                    handleChange={handleChange}
                />
                <FileBase 
                    type='file' 
                    multiple={false} 
                    onDone={({base64}) => setFormData({...formData, image: base64 })}/>
            </>
          )}
          {error && <p>{error}</p>}
          <button className='login-btn' type="submit">Submit</button>
          <p className='switch-mode-p'>
            {!isLoggedIn
              ? "Already have an account?"
              : "Don't have an account?"}
              <button type='button' className='switch-mode-btn' onClick={switchMode}>{!isLoggedIn ? 'Sign In' : 'Sign Up'}</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login