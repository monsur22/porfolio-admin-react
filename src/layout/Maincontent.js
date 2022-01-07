import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from  '../layout/Header';
import Test from  '../pages/Test'
import Home from  '../pages/Home'
import About from  '../pages/About'

const Maincontent = () => {
    return (
        <>
        <Header/>
            <Routes>

            <Route path="/" element={<Test/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>




            </Routes>
        </>
    )
}

export default Maincontent
