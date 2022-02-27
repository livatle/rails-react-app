import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// context
import { AuthContext } from '../App';
// api
import { signUp } from '../lib/api/auth';
// component
import { SignForm } from './index'

const SignUp = () => {
    const navigate = useNavigate();

    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const signUpHandleSubmit = async (e) => {
        e.preventDefault();
    
        const params = {
          name: name,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation
        }
    
        try {
          const res = await signUp(params);
          console.log(res);
          if (res.status === 200) {
            // アカウント作成と同時にサインインさせてしまう
            Cookies.set('_access_token', res.headers['access-token']);
            Cookies.set('_client', res.headers['client']);
            Cookies.set('_uid', res.headers['uid']);
    
            setIsSignedIn(true);
            setCurrentUser(res.data.data);
    
            navigate('/');
            console.log('signed in successfully');
          } else {
            console.log("failure sign up")
          }
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <div className="c-grid">
          <h1 className="u-text">SIGN UP</h1>
          <SignForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordConfirmation={passwordConfirmation}
              setPasswordConfirmation={setPasswordConfirmation}
              handleSubmit={signUpHandleSubmit}
              signType='signUp'
            />
        </div>
    )
}

export default SignUp