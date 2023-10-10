import React from 'react';
import Light from './Light';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/Nav.css";
import Logo from '../assets/image/logo.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className='logo'>
                <img src={Logo} width={100} alt='Logo'/>
			    <h1>Ofijan</h1>
            </div>
			<nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Exit Exam</a>
                    <a href="/#">Login</a>
                    <a href="/#">Sing Up</a>
				{ <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button> }
			</nav>

            <div>
                <Light/>
            </div>

            <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;