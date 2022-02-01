import React, { useState, useEffect, createContext } from 'react';
import { Edit, Detail, New, Header, List, SignIn, SignUp} from './components'
import './assets/styles/style.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'

import { getCurrentUser } from './lib/api/auth';

function App() {

  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()
      console.log(res)

      if (res?.status === 200) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.currentUser)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }
  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);


  // ユーザーが認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/signin」ページに促す
  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Navigate to='/signin' />;
      }
    } else {
      return <></>;
    }
  };

  return (
    <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<List />} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/new' element={<New />} />
            <Route path='/post/:id' element={<Detail />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
