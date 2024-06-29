import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import React, {useState} from 'react'

function App() {

  // to control dark and light mode functionality
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const displayAlert = (message, type)=>
    {
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
    }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#525667';
      displayAlert("Dark mode has been enabled", "success");
      //document.title = 'Texts dot com - Dark mode';
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert("Light mode has been enabled", "success");
      //document.title = 'Texts dot com - Light mode';
    }
  }


  return (
    <>
    <Navbar title="Texts.com" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textform displayAlert={displayAlert} heading="Word & Character Counter" mode={mode} />
    </>
  );
}

export default App;
