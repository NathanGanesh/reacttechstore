import React, { useState } from 'react';
import { FaCartPlus, FaBars } from 'react-icons/fa';
import SideBar from './SideBar';
import SideCart from './SideCart';
import { Link } from 'react-router-dom';

export default function Navbar() {
	// console.log(window.location.origin + '/page-images/images/logo.svg');
	const [ index, setIndex ] = useState(0);
	const [ sidebarIndex, setBarIndex ] = useState(0);

	function handeClick() {
		if (index === 0) {
			setIndex(1);
		} else {
			setIndex(0);
		}
	}

	function handleCart() {
		if (sidebarIndex === 0) {
			setBarIndex(1);
		} else {
			setBarIndex(0);
		}
	}

	return (
		<nav className="flex-nav">
			<FaBars onClick={() => handeClick()} className="nav-icon" />
			<SideBar index={index} />
			<Link to="/">
				<img src={window.location.origin + '/page-images/images/logo.svg'} alt="logo" />
			</Link>
			<FaCartPlus className="nav-icon" onClick={() => handleCart()} />
			<SideCart sideCartIndex={sidebarIndex} />
		</nav>
	);
}
