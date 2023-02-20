import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./auth.scss";

function SignUpForm(props: { setAuth: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  let signInHandler = (e: any) => {
    props.setAuth(true);
  };
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="auth-bg">
        <div className="login">
          <h1>Sign up</h1>
        </div>
        <form onSubmit={handleSignUp} className="auth-form">
          {error && <p>{error}</p>}
          <input
            type="email"
            className="auth-input"
            placeholder="Username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" value="Sign In"></input>
        </form>
        <span className="already-have">
          Already have account?
          <div className="sign-in-button" onClick={signInHandler}>
            Sign In
          </div>
        </span>
      </div>
    </div>
  );
}

export default SignUpForm;
