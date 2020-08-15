import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);

	const addToCart = (element) => {
		const exist = cart.find((item) => item.sku === element.sku);
		if(exist) {
			setCart(cart.map((item) =>
				item.sku === exist.sku ? {...item, quantity: item.quantity + element.quantity} : item
			));
		} else
			setCart([...cart, element]);
	};

	return (
		<CartContext.Provider value={{
			cart,
			addToCart
		}}>
			{children}
		</CartContext.Provider>
	);
};