import React from 'react';
import { FaCartPlus, FaBars } from 'react-icons/fa';

export default function Navbar() {
	console.log(window.location.origin + '/page-images/images/logo.svg');
	return (
		<nav className="flex-nav">
			<FaBars />
			<img src={window.location.origin + '/page-images/images/logo.svg'} alt="logo" />
			<FaCartPlus />
		</nav>
	);
}
