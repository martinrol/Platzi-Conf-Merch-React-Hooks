import React from 'react'

import '../styles/components/Payment.css';

const Payment = () => {
    return (
        <section className="Payment">
            <div className="Payment__content">
                <h3>Order summary: </h3>
                <div className="Payment__content--button">
                    Paypal Button
                </div>
            </div>
        </section>
    )
}

export default Payment
