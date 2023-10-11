import React from "react";
import './App.css';
import NavBar from './components/Navbar';
import Lottie from "lottie-react";
import animationData from './assets/animation_lnk8tp8u.json'
import  Footer from './components/footer/footer';
import  Body from './components/body/body'

function App() {
  return (
<>
   
      <NavBar/>
      <Body/>
      <Footer/>
 
{/* <div><Lottie animationData={animationData}/></div> */}
</>
    
  );
}

export default App;

