import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Utils from './components/Utils';
import Alerts from './components/Alerts';
import Contact from './components/Contact';
import UtilsAvail from './components/UtilsAvail';
import About from "./components/About";

function App() {

  const [mode, setMode] = useState('dark');
  const [modeText,setModeText] = useState('light');
  const [bgmode,setbgmode]= useState('dark');
  const [Alert, setAlert] = useState(null);
  document.body.style.backgroundColor=`var(--bg-${bgmode})`;
  
  const showAlert = (message,type)=>{
      setAlert({
          msg:message,
          type:type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor=`var(--bg-${bgmode})`;
      setMode('light');
      setModeText('dark');
      setbgmode('light');
      showAlert("Light mode Enabled succesfully","Success");
    }
    else{
      document.body.style.backgroundColor=`var(--bg-${bgmode})`;
      setMode('dark');
      setModeText('light');
      setbgmode('dark');
      showAlert("Dark mode Enabled succesfully","Success");
    }
  }

  return (
    
      <Router>
        <Navbar mode={mode} modeText={modeText} toggle={toggleMode}/>
        <Alerts Alrt={Alert}/>
        <Routes>
          <Route path="/" element={<Utils bgmode={bgmode} showAlert={showAlert}/>}/>

          <Route path="/Text-Utility" element={<Utils bgmode={bgmode} showAlert={showAlert}/>}/>
            
          <Route path="/about" element={<About mode ={mode}/>}/>
            
          <Route path="/contact" element={<Contact mode={mode}/>}/>

          <Route path="/Utility-Available" element={<UtilsAvail mode={mode}/>}/>
            
        </Routes>
      
        {/* <Switch>
          <Route path="/">
            <Utils bgmode={bgmode} showAlert={showAlert}/>
          </Route>
          <Route path="/about">
            <About mode ={mode}/>
          </Route>
          <Route path="/contact">
            <Contact mode={mode}/>
          </Route>
          <Route path="/UtilityAvailable">
            <UtilsAvail mode={mode}/>
          </Route>
        </Switch> */}
      </Router>

  );
}

export default App;