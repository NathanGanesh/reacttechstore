import React from 'react';
import Button from './Button';

export default function Hero(props) {
	return (
		<div className={props.class}>
			<h1 className="home-title">{props.title}</h1>
			<Button name={props.buttonText} btnclass={props.btnclass} />
		</div>
	);
}
