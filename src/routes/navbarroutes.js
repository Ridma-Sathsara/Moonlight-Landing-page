import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBarPath } from "./path";


import  Home  from "../pages/Home";
import Shop from "../pages/shop";
import About from "../pages/About";
import Contact from "../pages/Contact";

const navbarroutes = () => {
  return (
    <Routes>
      <Route path={NavBarPath.HOME} element={<Home />} />
      <Route path={NavBarPath.SHOP} element={<Shop />} />
      <Route path={NavBarPath.ABOUT} element={<About />} />
      <Route path={NavBarPath.CONTACT} element={<Contact />} />
    </Routes>
  );
};
export default navbarroutes;
