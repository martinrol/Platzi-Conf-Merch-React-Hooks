import React from 'react'

import '../styles/components/Success.css';

const Success = () => {
    return (
        <section className="Success">
            <div className="Success__content">
                <h2>Martin, Thank you for your purchase</h2>
                <span>Your order will arrive in 3 days at your address: </span>
                <div className="Success__content--map">
                    Google Maps
                </div>
            </div>
        </section>
    )
}

export default Success
