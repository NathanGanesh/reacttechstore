import React from 'react';
import items from '../../data/productData';
import Button from '../Button';

export default function SingleProductInfo(props) {
	// console.log(items);
	// console.log(props.match.params.name);
	let product = items.filter((item, index) => {
		return item.fields.title === props.name;
	});
	const { title, company, description, price } = product[0].fields;
	const url = product[0].fields.image.fields.file.url;

	return (
		<div className="container-single-product">
			<div>
				<img className="single-product-img" src={window.location.origin + '/' + url} alt="product-img" />
			</div>
			<div className="product-info">
				<h2>Model: {title}</h2>
				<h3>Company: {company}</h3>
				<h4>price: ${price}</h4>
				<h5>Some Info About Product :</h5>
				<p>{description}</p>
				<div className="product-info-btn">
					<Button link="/add_to_cart" btnclass="btn-default" name="add to cart" />
				</div>
				<div className="product-info-btn">
					<Button link="/products" btnclass="btn-default" name="back to products" />
				</div>
			</div>
		</div>
	);
}
