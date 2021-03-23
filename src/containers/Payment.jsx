import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import { pass } from '../../pass';

import { sumTotal } from '../utils/sumTotal';
import '../styles/components/Payment.css';

const Payment = (props) => {
    const { state: {cart, buyer} } = useContext(AppContext);
    const clientPaypalID = pass.paypalPaymentClientID;

    const paypalOptions = {
        clientId: clientPaypalID,
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = data => {
        console.log(data)
        if(data.status === 'COMPLETE') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            props.history.push('/checkout/success');
        }
    }

    return (
        <section className="Payment">
            <div className="Payment__content">
                <h3>Order summary: </h3>
                {cart.map((item) => (
                    <div className="Payment__content--item" key={item.title}>
                        <div className="Payment__content--item-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment__content--button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={sumTotal(cart)}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
        </section>
    )
}

export default Payment
