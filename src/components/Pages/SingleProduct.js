import React from 'react';
import Hero from '../Elements/Hero';
import SingleProductInfo from '../Elements/SingleProduct/SingleProductInfo';
import Footer from '../Elements/Footer';

export default function SingleProduct(props) {
	const params = props.match.params.name;

	// console.log(params);
	return (
		<div>
			<Hero class="single-product" title="single product" />
			<SingleProductInfo name={params} />
			<Footer />
		</div>
	);
}
