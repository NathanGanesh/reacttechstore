import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
	const [ index, setIndex ] = useState(0);

	return (
		<div className="side-bar">
			<Link className="sidebar-link" to={'/'}>
				<div>Home</div>
			</Link>
			<Link className="sidebar-link" to={'/about'}>
				<div>About</div>
			</Link>
			<Link className="sidebar-link" to="/products">
				<div>Products</div>
			</Link>
			<Link className="sidebar-link" to="/contact">
				<div>Contact</div>
			</Link>
			<Link className="sidebar-link" to="/cart">
				<div>Cart</div>
			</Link>
		</div>
	);
}
