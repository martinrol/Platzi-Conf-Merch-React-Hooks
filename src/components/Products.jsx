import React, { useContext } from 'react';

import Product from './Product';
import AppContext from '../context/AppContext';

import '../styles/components/Products.css';

const Products = () => {
  // const { state, addToCart } = useContext(AppContext);
  // const { products } = state;

  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <main className="Products">
      <section className="Products__items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>
    </main>
  );
};

export default Products;
