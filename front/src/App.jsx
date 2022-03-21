import React, { useState, useEffect, createContext } from 'react';
//style
import './assets/styles/style.css'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
//api
import { getCurrentUser } from './lib/api/auth';
//material-ui
import { Box, TableContainer } from '@mui/material';
//component
import { SignIn, SignUp } from './components/Auth'
import { FollowingsList, FollowersList } from './components/Followers'
import { Edit, Detail, FavoritePosts, New, PostsList, UserPosts } from './components/Posts'
import { SideBar } from './components/SideBar'

export const AuthContext = createContext();

export const drawerWidth = "15em";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  //ログイン中のユーザーがいるか確認する関数
  const handleGetCurrentUser = async () => {
    try {
      //apiへリクエスト
      const res = await getCurrentUser()
      console.log(res)
      
        //ログイン中のユーザーがいた場合
        if (res?.data.isLogin === true) {
          //ログイン中であることを示す真偽値
          setIsSignedIn(true)
          //ログイン中のユーザー情報をセット
          setCurrentUser(res?.data.data);
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

  //ログイン中ではないユーザーに権限がないページは/signinページへ流す
  const Private = ({children}) => {
    //ログイン判定より先にリダイレクトすることを防ぐ
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return (
          <Navigate to='/signin' />
        )
      }
    } else {
      return <></>;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loading,
        handleGetCurrentUser,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Router>
          <SideBar />
          <Box 
              component="main"
              sx={{ overflowY: "scroll", height: "100%", ml: drawerWidth, position: "fixed", width: `calc(100% - ${drawerWidth})` }}
          >
              <TableContainer>
                <Routes>
                  <Route exact path='/edit/:id' element={<Private><Edit /></Private>} />
                  <Route exact path='/post/:id' element={<Private><Detail /></Private>} />
                  <Route exact path='/users/:id/favorite_posts' element={<FavoritePosts />} />
                  <Route exact path='/users/:id/following' element={<FollowingsList />} />
                  <Route exact path='/users/:id/follower' element={<FollowersList />} />
                  <Route exact path='/new' element={<Private><New /></Private>} />
                  <Route exact path='/' element={<PostsList />} />
                  <Route exact path='/users/:id' element={<UserPosts />} />
                  <Route exact path='/signin' element={<SignIn />} />
                  <Route exact path='/signup' element={<SignUp />} />
                </Routes>
              </TableContainer>
          </Box>
        </Router>
      </Box>
    </AuthContext.Provider>
  );
}

export default App;
