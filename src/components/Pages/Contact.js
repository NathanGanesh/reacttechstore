import React from 'react';
import Hero from '../Elements/Hero';
import Nav from '../Elements/Navbar';
import Footer from '../Elements/Footer';
import MyForm from '../Elements/MyForm';

export default function Contact() {
	return (
		<div>
			<Nav />
			<Hero class="contact" />
			<h1 className="contact-us">Contact us</h1>
			<MyForm />
			<Footer />
		</div>
	);
}