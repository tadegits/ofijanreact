import React from 'react';
import Light from './Light';
import '../components/Styles/Nav.css';

function Navbar() {
  return (
    <nav>
        <div>
            Logo
        </div>
        <div>
            Name
        </div>
        <div>
            <ul className='list'>
                <li>Home</li>
                <li>Exit Exam</li>
                <li>Signin</li>
                <li>Sign Up</li>
            </ul>
        </div>
        <div>
            <Light />
        </div>
    </nav>
  )
}

export default Navbar