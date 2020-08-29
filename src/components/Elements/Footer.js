import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitch } from 'react-icons/fa';
export default function Footer() {
	return (
		<div className="footer">
			<div>
				<p>Copyright © Tech Store 2020. All Rights Reserved</p>
			</div>
			<FaFacebookF className="footer-icon" />
			<FaLinkedinIn className="footer-icon" />
			<FaTwitch className="footer-icon" />
		</div>
	);
}
