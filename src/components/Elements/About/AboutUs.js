import React from 'react';
import Button from '../Button';
import Footer from '../Footer';

export default function AboutUs() {
	return (
		<div>
			<div className="about-us">
				<div>
					<img src={window.location.origin + '/page-images/images/aboutBcg.jpeg'} alt="aboutbcg" />
				</div>
				<div className="about-us-description">
					<h1>about us</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem libero doloribus
						quas? A, nulla!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem libero doloribus
						quas? A, nulla!
					</p>
					<Button btnclass="btn-default" name="more info" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
