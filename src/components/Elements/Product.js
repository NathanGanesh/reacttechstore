import React from 'react';

export default function Product(props) {
	console.log(props);

	const { title, price, image } = props.item.fields;

	return (
		<div className="product-item">
			<img className="product-img" src={window.location.origin + '/' + image.fields.file.url} alt="product-img" />
			<div className="product-descriptions">
				<p>{title}</p>
				<p>${price}</p>
			</div>
		</div>
	);
}
