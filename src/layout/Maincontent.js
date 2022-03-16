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
import Education from  '../pages/Education'
import Experience from  '../pages/Experience'
import Skill from  '../pages/Skill'
import Portfolio from  '../pages/Portfolio'
const Maincontent = () => {
    return (
        <>
            <Header/>
            <Routes>

                <Route path="/" element={<Test/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Education" element={<Education/>}/>
                <Route path="/Experience" element={<Experience/>}/>
                <Route path="/Skill" element={<Skill/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>




            </Routes>
        </>
    )
}

export default Maincontent
