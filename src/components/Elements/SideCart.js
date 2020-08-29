import React from 'react';
import Button from './Button';

export default function SideCart({ sideCartIndex }) {
	console.log(sideCartIndex);
	function displayPage(sideCartIndex) {
		let jungle = '';
		sideCartIndex === 1 ? (jungle = 'inline-block') : (jungle = 'none');

		let zindex = 0;
		sideCartIndex === 1 ? (zindex = 1000) : (zindex = -1000);

		switch (sideCartIndex) {
			default:
			case 1:
				return (
					<div className="side-cart-index" style={{ zIndex: zindex, display: `${jungle}` }}>
						<h2 className="cart-total">Cart Total : $100</h2>
						<Button name="cart page" link="/cart" btnclass="btn-cart" />
					</div>
				);
		}
	}

	return displayPage(sideCartIndex);
}
