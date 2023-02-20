import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import { ReactComponent as ReactLogo } from "./home.svg";
import AuthPage from "./Auth/AuthPage";
import SignUpPage from "./Auth/SignUpPage";
import { useState } from "react";
const Layout = () => {
  const [isAuth, setAuth] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  return (
    <>
      <header className="head">
        <h1>Tr.</h1>
        <Link to="/">
          <button className="layoutButton">
            <ReactLogo className="home-svg"></ReactLogo>
          </button>
        </Link>
      </header>
      <div className="container">
        {isAuth ? (
          <Outlet></Outlet>
        ) : isSignUp ? (
          <AuthPage setAuth={setAuth} isSignUp={setSignUp}></AuthPage>
        ) : (
          <SignUpPage setAuth={setSignUp}></SignUpPage>
        )}
      </div>
    </>
  );
};
export default Layout;
