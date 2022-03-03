import React, { useState } from 'react';
import FormBody from './Form';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';
import { createPost } from '../lib/api/post';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [value, setValue] = useState({})
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const params = {
      name: value.name,
      content: value.content
    }
    try {
      const res = await createPost(params)
      console.log(res)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <FormBody
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={value}
      buttonType='create'
    />
  )
};
export default New;