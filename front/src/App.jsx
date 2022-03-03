import React, { useState, useEffect, createContext } from 'react';
//style
import './assets/styles/style.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
//api
import { getCurrentUser } from './lib/api/auth';
//material-ui
import { Box, TableContainer } from '@mui/material';
//component
import { Edit, Detail, FollowingsList, FollowersList, New, SideBar, PostsList, SignIn, SignUp, UserPosts } from './components'

export const AuthContext = createContext();

export const drawerWidth = "15em";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const Private = ({children}) => {
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
              sx={{ height: "100%", position: "fixed", ml: drawerWidth, width: `calc(100% - ${drawerWidth})` }}
          >
              <TableContainer>
              <Routes>
                <Route path='/users/:id/following' element={<FollowingsList />} />
                <Route path='/users/:id/follower' element={<FollowersList />} />
                <Route exact path='/' element={<PostsList />} />
                <Route exact path='/users/:id' element={<UserPosts />} />
                <Route exact path='/signin' element={<SignIn />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route path='/edit/:id' element={<Private><Edit /></Private>} />
                <Route path='/post/:id' element={<Private><Detail /></Private>} />
                <Route path='/new' element={<Private><New /></Private>} />
              </Routes>
              </TableContainer>
          </Box>
        </Router>
      </Box>
    </AuthContext.Provider>
  );
}

export default App;
