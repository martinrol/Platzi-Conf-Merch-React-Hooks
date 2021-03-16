import React from 'react'

import Product from './Product';

import '../styles/components/Products.css';

const Products = ({ products }) => {
    return (
        <main className="Products">
            <section className="Products__items">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </section>
        </main>
    )
}

export default Products
