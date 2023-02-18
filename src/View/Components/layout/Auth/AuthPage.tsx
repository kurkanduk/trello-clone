import React, { useState } from 'react';
import "./auth.scss"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const AuthPage = (props:{setAuth: any}) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    props.setAuth(true);
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <div className='container'>
      <div className='auth-bg'>
        <form className="auth-form"onSubmit={handleSubmit}>
          <input
            className='auth-input'
            type="email"
            placeholder="Username"
            value={email}
            onChange={event => setUsername(event.target.value)}
          />
          <input
            className='auth-input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button className="auth-input"onClick={handleSubmit}>Sign Up</button>
        </form>
        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;