import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//api
import { updatePost, getDetail } from '../../lib/api/post';
//component
import FormBody from '../TextField/Form';

const Edit = () => {
  // apiで取得したデータを管理する為のstate
  const [value, setValue] = useState('')
  const query = useParams();
  const navigate = useNavigate();

  // 画面が描画された時、queryが更新された時に関数を実行
  useEffect(() => {
    handleGetData(query)
  },[query])

  //編集する投稿を取得する関数
  const handleGetData = async (query) => {
    try {
      //apiへリクエスト
      const res = await getDetail(query.id)
      setValue({
        content: res.data.post.content
      })
    } catch (e) {
      console.log(e)
    }
  }
  //投稿を編集する関数
  const handleChange = (e) => {
    //変更した内容をセット
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }
  //編集した投稿を作成する関数
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //apiへリクエスト
      const res = await updatePost(query.id, value)
      console.log(res)
      //成功した場合、ホームへ流す
      navigate('/')
    } catch(e) {
      console.log(e)
    }
  }

  return(
    <FormBody
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={value}
      buttonType='edit'
    />
  )
}
export default Edit