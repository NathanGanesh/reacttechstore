import React from 'react';
import Hero from '../Elements/Hero';
import Nav from '../Elements/Navbar';
import AboutUs from '../Elements/About/AboutUs';

export default function About() {
	return (
		<div>
			<Nav />
			<Hero class="about" />
			<AboutUs />
		</div>
	);
}
