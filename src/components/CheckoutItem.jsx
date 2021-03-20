import React from 'react'

const CheckoutItem = ({ product, handleRemote }) => {
    return (
        <div className="Checkout__content--item">
            <div className="Checkout__content--item-element">
                <h4>{product.title}</h4>
                <span>${product.price}</span>
            </div>
            <button type="button" onClick={handleRemote}>
                <i className="fas fa-trash-alt" title="Delete"></i>
            </button>
        </div>
    )
}

export default CheckoutItem
