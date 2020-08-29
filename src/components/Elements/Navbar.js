import React, { useState } from 'react';
import { FaCartPlus, FaBars } from 'react-icons/fa';
import SideBar from './SideBar';

export default function Navbar() {
	// console.log(window.location.origin + '/page-images/images/logo.svg');
	const [ index, setIndex ] = useState(0);

	function handeClick(event) {
		if (index === 0) {
			setIndex(1);
		} else {
			setIndex(0);
		}
	}

	return (
		<nav className="flex-nav">
			<FaBars onClick={(event) => handeClick(event)} className="nav-icon" />
			<SideBar index={index} />
			<img src={window.location.origin + '/page-images/images/logo.svg'} alt="logo" />
			<FaCartPlus className="nav-icon" />
		</nav>
	);
}
