import React, { useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// component
import { SignForm } from './index'
// context
import { AuthContext } from '../App';
// api
import { signIn } from '../lib/api/auth';

const SignIn = () => {
    const navigate = useNavigate();
    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandleSubmit = async (e) => {
      e.preventDefault();
    
        const params = {
          email: email,
          password: password,
        }
    
        try {
          const res = await signIn(params);
    
          if (res.status === 200) {
            // 成功した場合はCookieに各値を格納
            Cookies.set('_access_token', res.headers['access-token']);
            Cookies.set('_client', res.headers['client']);
            Cookies.set('_uid', res.headers['uid']);
    
            setIsSignedIn(true);
            setCurrentUser(res.data.data);
    
            navigate('/');
            console.log("Signed in successfully!")
          }
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <div className="c-grid">
          <h1 className="u-text">SIGN IN</h1>
          <SignForm 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={signInHandleSubmit}
              signType='signIn'
          />
        </div>
    )
}

export default SignIn