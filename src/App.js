// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Utils from './components/Utils';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

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
    <div>
      <Navbar mode={mode} modeText={modeText} toggle={toggleMode}/>
      <Alerts Alrt={Alert}/>
      <Utils bgmode={bgmode} showAlert={showAlert}/>
    </div>
  );
}

export default App;