import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context
import { ProductContext } from './contexts/ProductContext'


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	const { ProductContext } = useContext(ItemsContext)

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}} >
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
			/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;


/* 
2 state properties 
- products => keep track of available products
- cart => keep track of items in cart 

App.js
- contains 3 components => nav + route + route 
- each component being passed either CART state or PRODUCT state as props 

Goal: refactor application to use context API to make data more efficient

1. Add item functionality - function called addItem => finish writing logic 

*/
