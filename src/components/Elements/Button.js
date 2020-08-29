import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ name, btnclass, link }) {
	return (
		<div>
			<Link to={link}>
				<button className={btnclass}>{name}</button>;
			</Link>
		</div>
	);
}
