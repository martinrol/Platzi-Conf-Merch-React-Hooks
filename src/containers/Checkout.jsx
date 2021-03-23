import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import { sumTotal } from '../utils/sumTotal';

import CheckoutItem from '../components/CheckoutItem';

import '../styles/components/Checkout.css';

const Checkout = () => {
    const { state: { cart }, removeFromCart } = useContext(AppContext);

    const handleRemoteItem = product => () => {
        removeFromCart(product);
    }

    return (
        <section className="Checkout">
            <div className="Checkout__content">
                {cart.length > 0 ? <h3>Order List</h3> : <h3>No orders...</h3>}
                {cart.map((item) => (
                    <CheckoutItem 
                    product={item}
                    handleRemote={handleRemoteItem(item)}
                    />
                ))}
            </div>
            {cart.length > 0 &&
                <div className="Checkout__content--sidebar">
                    <h3>{`Total Price: $ ${sumTotal(cart)}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continue order</button>
                    </Link>
                </div>
            }   
        </section>
    )
}

export default Checkout
