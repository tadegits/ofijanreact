import React from 'react';
import Light from './Light';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/Nav.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Ofijan</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Blog</a>
				<a href="/#">About Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            <div>
                <Light/>
            </div>
		</header>
	);
}

export default Navbar;