import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Singin from './pages/Singin';
import Singup from './pages/Singup';

function App() {
  return (
    <div >
      <Header/>
     <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/Singin" element={<Singin/>}/>
            <Route path="/Singup" element={<Singup/>}/>



      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
