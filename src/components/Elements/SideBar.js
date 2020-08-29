import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar({ index }) {
	function displayPage(index) {
		let jungle = '';
		index === 1 ? (jungle = 'inline-block') : (jungle = 'none');

		let zindex = 0;

		index === 1 ? (zindex = 1000) : (zindex = -1000);

		switch (index) {
			default:
			case 1:
				return (
					<div className="side-bar" style={{ zIndex: zindex, display: `${jungle}` }}>
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
	}

	return displayPage(index);
}
