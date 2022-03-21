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

  //作成された投稿の内容をセット
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  //投稿を作成する関数
  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      name: value.name,
      content: value.content
    }
    
    try {
      //apiへリクエスト
      const res = await createPost(params)
      if (res.status === 200) {
        //成功した場合、ホームへ流す
        navigate('/')
      } else {
        //投稿に失敗した場合、アラートメッセージを表示
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