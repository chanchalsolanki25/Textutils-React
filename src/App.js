import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
     setAlert({
      msg: message,
      type: type
     })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2500);
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042e36';
      showAlert('Dark mode enabled', 'success');
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }

  return (
    <div className="App">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <TextForm mode={mode} showAlert={showAlert}/>
    </div>
  );
}

export default App;
