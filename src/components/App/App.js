import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import About from '../Pages/About';
import Error from '../Pages/Error';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/about" component={About} />
				<Route exact path="/products/:name" />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
