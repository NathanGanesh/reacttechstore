import React from 'react';
import NavBar from '../Elements/Navbar';
import Hero from '../Elements/Hero';
import Services from '../Elements/Home/Services';
import Featured from '../Elements/Home/Featured';
import items from '../data/productData';
import Button from '../Elements/Button';
import Footer from '../Elements/Footer';

export default function Home() {
	return (
		<div>
			<Hero
				buttonText="our products"
				title="awesome gadgets"
				class="home"
				btnclass="btn-default"
				link="/products"
			/>
			<Services />
			<Featured items={items} />
			<Button name="our products" btnclass="btn-our-products" link="/products" />
			<Footer />
		</div>
	);
}
