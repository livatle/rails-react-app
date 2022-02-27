import React, { useState, useEffect, createContext } from 'react';
import { Edit, Detail, FollowingsList, FollowersList, New, Header, PostsList, SignIn, SignUp, UserPosts } from './components'
import './assets/styles/style.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'

import { getCurrentUser } from './lib/api/auth';

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

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
          <div className='current'>
          {isSignedIn && currentUser ? (
            <>
                <h2>name: {currentUser?.name}</h2>
                <h2>email: {currentUser?.email}</h2>
            </>
            ) : (
            <></>
            )
          }
          </div>
          <Routes>
            <Route exact path='/' element={<PostsList />} />
            <Route exact path='/users/:id' element={<UserPosts />} />
            <Route path='/users/:id/following' element={<FollowingsList />} />
            <Route path='/users/:id/follower' element={<FollowersList />} />
            <Route exact path='/signup' element={<SignUp />} />
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
