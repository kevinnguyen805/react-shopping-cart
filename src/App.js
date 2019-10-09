import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {


	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	// stretch
	const removeItem = shopItem => {
		setCart(cart.filter(item => item.id !== shopItem.id))
	}

	return (
		<div className="App">
			<CartContext.Provider value={{cart, removeItem}} >
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
			</CartContext.Provider>
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

Stretch (?)
- create a 'removeItem' function that allows you to remove an item from your cart with a click of a button
	- 'removeItem' should be able to be consumed from your ShoppingCartItem component
	- Each item has an ID for removeItem!

*/
