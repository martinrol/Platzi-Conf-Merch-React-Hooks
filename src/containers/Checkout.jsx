import React from 'react'

import '../styles/components/Checkout.css';

const Checkout = () => {
    return (
        <section className="Checkout">
            <div className="Checkout__content">
                <h3>Order List</h3>
                <div className="Checkout__content--item">
                    <div className="Checkout__content--item-element">
                        <h4>Item name</h4>
                        <span>$10</span>
                    </div>
                    <button type="button">Delete</button>
                </div>
            </div>
            <div className="Checkout__content--sidebar">
                <h3>Total Price: $10</h3>
                <button type="button">Continue order</button>
            </div>
        </section>
    )
}

export default Checkout
