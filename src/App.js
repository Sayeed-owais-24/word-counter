
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TxtForm from './components/TxtForm.jsx';


function App() {
  const[mode,setMode]=useState('light')
  
  const  toggle =()=>{
    if (mode ==='light'){
      setMode('dark')
      document.body.style.background='#163c66'
    }else{
      setMode('light')
      document.body.style.background='white'
    }
  }
 






  return (
   <>

<Navbar title="Mr.owais" links='Cards' mode ={mode} toggle={toggle}/>
<div className="container">

<TxtForm mode ={mode}/>


</div>

   </>
    
  );
}

export default App;

