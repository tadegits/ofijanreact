import React from "react";
import './App.css';
import NavBar from './components/Navbar';
import Lottie from "lottie-react";
import animationData from './assets/animation_lnk8tp8u.json'
import  Footer from './components/footer/footer';

function App() {
  return (
<>
    <React.Fragment>
      <NavBar/>
    </React.Fragment>
    <div className="App">
      <h2>hey there!</h2>
      <h2>hey there!</h2>
      <h2>hey there!</h2>
      <h2>hey there!</h2>
      <h2>hey there!</h2>
      <h2>hey there!</h2>
    </div>
    <React.Fragment>
      <Footer/>
    </React.Fragment>
{/* <div><Lottie animationData={animationData}/></div> */}
</>
    
  );
}

export default App;

