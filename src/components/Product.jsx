import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="Products__items--item">
            <img src={product.image} alt={product.title}/>
            <div className="Products__items--item-info">
                <h2>{product.title}
                    <span>$ {product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button">Buy</button>
        </div>
    )
}

export default Product
