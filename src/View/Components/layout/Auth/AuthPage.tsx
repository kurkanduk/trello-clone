import { useState } from "react";
import "./auth.scss";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

const AuthPage = (props: { setAuth: any; isSignUp: any }) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let signUpHandler = () => {
    props.isSignUp(false);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          props.setAuth(true);
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    });
  };

  return (
    <div className="container">
      <div className="auth-bg">
        <div className="login">
          <h1>Sign In</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="email"
            placeholder="Username"
            value={email}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
            <input
              type="submit"
              name="sent"
              value="Sign In"
              onClick={handleSubmit}
            ></input>
        </form>
        <span className="already-have">
          Don't have account?
          <div className="sign-in-button" onClick={signUpHandler}>
            Sign Up
          </div>
        </span>
      </div>
    </div>
  );
};

export default AuthPage;
