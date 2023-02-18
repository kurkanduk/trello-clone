import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
import { ReactComponent as ReactLogo } from "./home.svg";
import AuthPage from "./Auth/AuthPage";
import { useState } from "react";
const Layout = () => {
  const [isAuth, setAuth] = useState(false);
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
        {   isAuth?
            <Outlet></Outlet>
            :
            <AuthPage setAuth={setAuth}></AuthPage>
        }
      </div>
    </>
  );
};
export default Layout;
