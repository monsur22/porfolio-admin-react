import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from  '../layout/Header';
import Test from  '../pages/Test'

const Maincontent = () => {
    return (
        <>
        <Header/>
            <Routes>

            <Route path="/" element={<Test/>}/>




            </Routes>
        </>
    )
}

export default Maincontent
