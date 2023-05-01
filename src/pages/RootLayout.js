import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./RootLayout.module.css";
// import LikeContext from "../context/like-context";

function RootLayout() {
  return (
    <>
     
        <Header />
        <Outlet className="container" />
      
    </>
  );
}

export default RootLayout;
