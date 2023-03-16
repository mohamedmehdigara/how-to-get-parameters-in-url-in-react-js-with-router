import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import NavBar from './components/NavBar'
 
function App() {  
     
  return (  
    <div className="App">  
      <NavBar />  
    </div>  
  );  
}  
 
export default App;