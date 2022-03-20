import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//api
import { createPost } from '../../lib/api/post';
//component
import FormBody from '../TextField/Form';

const New = () => {
  const [value, setValue] = useState({})
  const [alertMessageOpen, setAlertMessageOpen] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      name: value.name,
      content: value.content
    }
    
    try {
      const res = await createPost(params)
      if (res.status === 200) {
        navigate('/')
      } else {
        setAlertMessageOpen(true)
      }
    } catch (e) {
      console.log(e)
      setAlertMessageOpen(true)
    }
  }

  return (
    <FormBody
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      alertMessageOpen={alertMessageOpen}
      setAlertMessageOpen={setAlertMessageOpen}
      value={value}
      buttonType='create'
    />
  )
};
export default New;