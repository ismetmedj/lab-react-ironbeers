import React from "react";
import { Outlet, Link } from "react-router-dom";
import headerImage from "../assets/header.png";

const Layout = () => {
  return (
    <header>
      <Link to="/">
        <img src={headerImage} alt="" />
      </Link>
      <Outlet />
    </header>
  );
};

export default Layout;
