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
import EducationEdit from "../pages/EducationEdit";
import ExperienceEdit from "../pages/ExperienceEdit";
import SkillEdit from "../pages/SkillEdit";
import PortfolioEdit from "../pages/PortfolioEdit";
const Maincontent = () => {
    return (
        <>
            <Header/>
            <Routes>

                <Route path="/" element={<Test/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Education" element={<Education/>}/>
                <Route path="/education/edit/:id" element={<EducationEdit/>}/>
                <Route path="/Experience" element={<Experience/>}/>
                <Route path="/experience/edit/:id" element={<ExperienceEdit/>}/>
                <Route path="/Skill" element={<Skill/>}/>
                <Route path="/skill/edit/:id" element={<SkillEdit/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/portfolio/edit/:id" element={<PortfolioEdit/>}/>




            </Routes>
        </>
    )
}

export default Maincontent
