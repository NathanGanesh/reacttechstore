import React from 'react';
import { FaAmazon, FaBluetooth, FaBeer } from 'react-icons/fa';

export default function Services() {
	return (
		<div className="services">
			<div>
				<FaAmazon className="service-icon" />
				<h6>free shipping</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quasi.</p>
			</div>
			<div>
				<FaBluetooth className="service-icon" />
				<h6>free shipping</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quasi.</p>
			</div>
			<div>
				<FaBeer className="service-icon" />
				<h6>free shipping</h6>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quasi.</p>
			</div>
		</div>
	);
}
