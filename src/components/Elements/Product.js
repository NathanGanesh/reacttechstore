import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

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
			<div className="product-icon-container">
				<div>
					<Link to={`/products/${title}`}>
						<FaSearch className="product-icon" />
					</Link>
				</div>
				<div>
					<Link to={`/add_to_cart/${title}`}>
						<FaShoppingCart className="product-icon" />
					</Link>
				</div>
			</div>
		</article>
	);
}
