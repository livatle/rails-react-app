import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//api
import { updatePost, getDetail } from '../lib/api/post';
//component
import FormBody from './Form';

const Edit = () => {
  // apiで取得したデータを管理する為のstate
  const [value, setValue] = useState('')
  // 一覧からreact-router-domを使ってidを取得
  const query = useParams();
  const navigate = useNavigate();
  // 画面が描画された時、queryが更新された時に関数を実行
  useEffect(() => {
    handleGetData(query)
  },[query])
  // idをapiクライアントに渡し、/api/v1/posts/:idのエンドポイントからデータ取得
  const handleGetData = async (query) => {
    try {
      const res = await getDetail(query.id)
      console.log(res.data)
      // 使う値のみstateにセットする
      setValue({
        name: res.data.post.name,
        content: res.data.post.content
      })
    } catch (e) {
      console.log(e)
    }
  }
  // テキストフィールドの変更を検知し値を書き換えstateで管理
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }
  // 更新ボタン押下後、idとparameterをapiクライアントに渡しリクエストを投げる
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await updatePost(query.id, value)
      console.log(res)
      // リクエストが成功したら'/'にリダイレクトさせる
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
      buttonType='update'
    />
  )
}
export default Edit