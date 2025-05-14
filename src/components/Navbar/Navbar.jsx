/** @format */

// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

/**
 * Navbar
 * A responsive, reusable navigation bar that toggles on mobile.
 *
 * Props:
 *  - logo: React node or image URL
 *  - links: array of { label: string, href: string }
 */
const Navbar = ({ logo, links }) => {
	// isOpen tracks whether mobile menu is visible
	const [isOpen, setIsOpen] = useState(false);

	// Toggle handler: flips open/closed state
	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<nav className="navbar">
			{/* Logo section; using a button wrapper for consistent height */}
			<div className="navbar__logo">
				{typeof logo === 'string' ? (
					<img
						src={logo}
						alt="Logo"
					/>
				) : (
					logo
				)}
			</div>

			{/* Hamburger icon for mobile */}
			<button
				className="navbar__toggle"
				onClick={toggleMenu}
				aria-label="Toggle navigation menu"
			>
				{/* Three bars icon */}
				<span className={`bar ${isOpen ? 'open' : ''}`}></span>
				<span className={`bar ${isOpen ? 'open' : ''}`}></span>
				<span className={`bar ${isOpen ? 'open' : ''}`}></span>
			</button>

			{/* Navigation links; className controls visibility */}
			<ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
				{links.map((link, idx) => (
					<li
						key={idx}
						className="navbar__item"
					>
						<a
							href={link.href}
							className="navbar__link"
							onClick={() => setIsOpen(false)} // close menu on link click
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
