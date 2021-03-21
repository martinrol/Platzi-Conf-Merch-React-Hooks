import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import AppContext from '../context/AppContext';

import '../styles/components/Information.css';

const Information = (props) => {
    const { state: { cart }, addToBuyer } = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = buyer => {
        addToBuyer(buyer);
        console.log(buyer)
    }

    return (
        <section className="Information">
            <div className="Information__content">
                <div className="Information__content--head">
                    <h2>Contact Information:</h2>
                </div>
                <div className="Information__content--form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">
                            Full Name
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            name="name" 
                            id="name" 
                            ref={register}
                            />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            id="email"
                            ref={register}
                            />
                        </label>
                        <label htmlFor="address">
                            Address
                            <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            id="address"
                            ref={register}
                            />
                        </label>
                        <label htmlFor="apto">
                            APT
                            <input 
                            type="text" 
                            placeholder="APT" 
                            name="apto" 
                            id="apto"
                            ref={register}
                            />
                        </label>
                        <label htmlFor="country">
                            Country
                            <input
                            type="text"
                            placeholder="Country"
                            name="country"
                            id="country"
                            ref={register}
                            />
                        </label>
                        <label htmlFor="state">
                            State
                            <input 
                            type="text" 
                            placeholder="State" 
                            name="state" 
                            id="state" 
                            ref={register}
                            />
                        </label>
                        <label htmlFor="city">
                            City
                            <input 
                            type="text" 
                            placeholder="City" 
                            name="city" 
                            id="city" 
                            ref={register}
                            />
                        </label>
                        <label htmlFor="cp">
                            Postal Code
                            <input 
                            type="text" 
                            placeholder="Postal Code" 
                            name="cp" 
                            id="cp" 
                            ref={register}
                            />
                        </label>
                        <label htmlFor="phone">
                            Phone
                            <input 
                            type="tel" 
                            placeholder="Phone" 
                            name="phone" 
                            id="phone" 
                            ref={register}
                            />
                        </label>
                        
                        <div className="Information__content--buttons">
                            <div className="Information__content--buttons-back">
                                <button type="button" onClick={() => props.history.goBack()}>
                                    Go Back
                                </button>
                            </div>
                            <div className="Information__content--buttons-next">
                                <button type="submit">
                                    Pay
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="Information__sidebar">
                <h3>Order Summary:</h3>
                {cart.map((item) => (
                    <div className="Information__sidebar--item" key={item.title}>
                        <div className="Information__sidebar--item-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Information
