import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Singin from './pages/Singin';
import Singup from './pages/Singup';
import Maincontent from "./layout/Maincontent";

function App() {
  return (
    <div >

     <Routes>

            <Route path="/*" element={<Maincontent/>}/>
            <Route path="/Singin" element={<Singin/>}/>
            <Route path="/Singup" element={<Singup/>}/>



      </Routes>


    </div>
  );
}

export default App;
