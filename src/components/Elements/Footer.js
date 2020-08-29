import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitch } from 'react-icons/fa';
export default function Footer() {
	return (
		<div className="footer">
			<div>
				<p>Copyright © Tech Store 2020. All Rights Reserved</p>
			</div>
			<a href="https://www.facebook.com/">
				<FaFacebookF className="footer-icon" />
			</a>
			<a href="https://www.facebook.com/">
				<FaLinkedinIn className="footer-icon" />
			</a>
			<a href="https://www.facebook.com/">
				<FaTwitch className="footer-icon" />
			</a>
		</div>
	);
}
