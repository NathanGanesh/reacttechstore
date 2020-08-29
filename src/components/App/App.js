import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Nav from '../Elements/Navbar';
import SideBar from '../Elements/SideBar';
import SideCart from '../Elements/SideCart';
import SingleProduct from '../Pages/SingleProduct';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<SideBar index={0} />
			<SideCart sideCartIndex={0} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/about" component={About} />
				<Route exact path="/products/:name" component={SingleProduct} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
