import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// api
import { signUp } from '../../lib/api/auth';
// context
import { AuthContext } from '../../App';
// component
import { SignForm } from '../TextField/index'

const SignUp = () => {
    const navigate = useNavigate();
    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
    const [alertMessageOpen, setAlertMessageOpen] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    //サインアップを実行する関数
    const signUpHandleSubmit = async (e) => {
        e.preventDefault();
        
        const params = {
          name: name,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation
        }
    
        try {
          //apiへリクエスト
          const res = await signUp(params);
          console.log(res);
          //アカウント作成と同時にサインイン、Cookieに各値を格納
          if (res.status === 200) {
            Cookies.set('_access_token', res.headers['access-token']);
            Cookies.set('_client', res.headers['client']);
            Cookies.set('_uid', res.headers['uid']);
    
            setIsSignedIn(true);
            //ログインに成功したユーザーの情報をセット
            setCurrentUser(res.data.data);
    
            navigate('/');
            window.location.reload()
          } else { 
            //ログインに失敗した場合、アラートメッセージを表示
            setAlertMessageOpen(true)
          }
        } catch (e) {
          console.log(e);
          setAlertMessageOpen(true)
        }
      };

    return (
      <SignForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
          alertMessageOpen={alertMessageOpen}
          setAlertMessageOpen={setAlertMessageOpen}
          handleSubmit={signUpHandleSubmit}
          signType='signUp'
      />
    )
}

export default SignUp