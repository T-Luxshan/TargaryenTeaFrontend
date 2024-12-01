import React, { useState, useEffect } from 'react';
import Cart from '../../Components/Order/Cart';
import cartData from '../../Data/product.json';

const CartSummaryPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load the JSON data into state and initialize quantities
    const itemsWithQuantities = cartData.map((item) => ({ ...item, quantity: 1 }));
    setCartItems(itemsWithQuantities);
  }, []);

  const handleQuantityChange = (id, operation) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: operation === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Filter cart items to include only the ones with isAddToCart = true
  const filteredCartItems = cartItems.filter((item) => item.isAddToCart);

  return (
    <Cart
      cartItems={filteredCartItems}  // Pass only the filtered items to Cart
      handleQuantityChange={handleQuantityChange}
      handleRemove={handleRemove}
    />
  );
};

export default CartSummaryPage;
