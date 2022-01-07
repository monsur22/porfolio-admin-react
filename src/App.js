import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Singin from './pages/Singin';
import Singup from './pages/Singup';
// import Test from './pages/Test';
import Maincontent from "./layout/Maincontent";

function App() {
  return (
    <div >

     <Routes>

            <Route path="/*" element={<Maincontent/>}/>
            <Route path="/Singin" element={<Singin/>}/>
            <Route path="/Singup" element={<Singup/>}/>
            {/* <Route path="/Test" element={<Test/>}/> */}



      </Routes>


    </div>
  );
}

export default App;
