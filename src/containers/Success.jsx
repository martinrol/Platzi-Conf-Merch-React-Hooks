import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

    return (
        <section className="Success">
            <div className="Success__content">
                <h2>{`${(buyer[0].name).charAt(0).toUpperCase()} Thank you for your purchase`}</h2>
                <span>Your order will arrive in 3 days at your address: </span>
                <div className="Success__content--map">
                    <Map data={location}/>
                </div>
            </div>
        </section>
    )
}

export default Success
