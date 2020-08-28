import React from 'react';
import Product from '../Product';

export default function Featured({ items }) {
	let featuredItems = items.filter((item) => item.fields.featured === true);

	return (
		<div className="therealdeal">
			<h1>Featured Products</h1>
			<div className="featured-items">
				{featuredItems.map((item, index) => {
					return <Product key={index} item={item} />;
				})}
			</div>
		</div>
	);
}
