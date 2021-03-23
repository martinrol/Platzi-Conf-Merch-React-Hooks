import React, { useContext } from 'react'

import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css';

const Success = () => {
    const { state: { buyer } } = useContext(AppContext);

    return (
        <section className="Success">
            <div className="Success__content">
                <h2>{`${buyer.name} Thank you for your purchase`}</h2>
                <span>Your order will arrive in 3 days at your address: </span>
                <div className="Success__content--map">
                    <Map />
                </div>
            </div>
        </section>
    )
}

export default Success
