import React from 'react'

import '../styles/components/Information.css';

const Information = () => {
    return (
        <section className="Information">
            <div className="Information__content">
                <div className="Information__content--head">
                    <h2>Contact Information:</h2>
                </div>
                <div className="Information__content--form">
                    <form action="">
                        <label htmlFor="name">
                            Full Name
                            <input 
                            type="text" 
                            placeholder="Full Name" 
                            name="name" 
                            id="name" 
                            />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            id="email" 
                            />
                        </label>
                        <label htmlFor="address">
                            Address
                            <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            id="address"
                            />
                        </label>
                        <label htmlFor="apto">
                            APT
                            <input 
                            type="text" 
                            placeholder="APT" 
                            name="apto" 
                            id="apto" 
                            />
                        </label>
                        <label htmlFor="country">
                            Country
                            <input
                            type="text"
                            placeholder="Country"
                            name="country"
                            id="country"
                            />
                        </label>
                        <label htmlFor="state">
                            State
                            <input 
                            type="text" 
                            placeholder="State" 
                            name="state" 
                            id="state" 
                            />
                        </label>
                        <label htmlFor="city">
                            City
                            <input 
                            type="text" 
                            placeholder="City" 
                            name="city" 
                            id="city" 
                            />
                        </label>
                        <label htmlFor="cp">
                            Postal Code
                            <input 
                            type="text" 
                            placeholder="Postal Code" 
                            name="cp" 
                            id="cp" 
                            />
                        </label>
                        <label htmlFor="phone">
                            Phone
                            <input 
                            type="text" 
                            placeholder="Phone" 
                            name="phone" 
                            id="phone" 
                            />
                        </label>
                    </form>
                </div>
                <div className="Information__content--buttons">
                    <div className="Information__content--buttons-back">Go Back</div>
                    <div className="Information__content--buttons-next">Pay</div>
                </div>
            </div>
            <div className="Information__sidebar">
                <h3>Order Summary:</h3>
                <div className="Information__sidebar--item">
                    <div className="Information__sidebar--item-element">
                        <h4>ITEM Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information
