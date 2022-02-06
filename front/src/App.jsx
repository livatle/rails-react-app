import React, { useState, useEffect, createContext } from 'react';
import { Edit, Detail, New, Header, PostsList, SignIn, SignUp} from './components'
import './assets/styles/style.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'

import { getCurrentUser } from './lib/api/auth';
//グローバルstate
export const AuthContext = createContext();

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

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
        console.log(setIsSignedIn)
        console.log(res?.data.isLogin)
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
    <AuthContext.Provider
            value={{
              loading,
              setLoading,
              isSignedIn,
              setIsSignedIn,
              currentUser,
              setCurrentUser,
            }}
      >
        <Router>
        <div>
          <Header />
          <div>
          {isSignedIn && currentUser ? (
                <>
                    <h2>名前: {currentUser?.name}</h2>
                    <h2>メールアドレス: {currentUser?.email}</h2>
                </>
                ) : (
                <></>
                )
            }
          </div>
          <Routes>
            <Route exact path='/' element={<PostsList />} />
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route path='/new' element={<Private><New /></Private>} />
            <Route path='/post/:id' element={<Private><Detail /></Private>} />
            <Route path='/edit/:id' element={<Private><Edit /></Private>} />
          </Routes>
        </div>
        </Router>
      </AuthContext.Provider>

    
  );
}

export default App;
