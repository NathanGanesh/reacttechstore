import React from 'react';

export default function Button({ name, btnclass }) {
	return <button className={btnclass}>{name}</button>;
}
