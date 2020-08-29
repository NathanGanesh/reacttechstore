import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ name, btnclass, link, onclick }) {
	return (
		<div>
			<Link to={link}>
				<button onClick={onclick} className={btnclass}>
					{name}
				</button>
			</Link>
		</div>
	);
}
