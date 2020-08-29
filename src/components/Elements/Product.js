import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
	// console.log(props);
	const { title, price, image } = props.item.fields;

	return (
		<article className="product-item">
			<div className="img-container">
				<img
					className="product-img"
					src={window.location.origin + '/' + image.fields.file.url}
					alt="product-img"
				/>
			</div>
			<div className="product-descriptions">
				<p>{title}</p>
				<p>${price}</p>
			</div>
			<Link to={`/products/${title}`}>goto</Link>
		</article>
	);
}
