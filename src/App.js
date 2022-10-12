
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Home from './components/Pages/Home';
import Error from './components/Layouts/Error';




import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      
       <Header/> 

       <Home/>

       <Footer/>
       
       


      
    </>
    
  )
}

export default App


