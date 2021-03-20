import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/Header.css';

const Header = () => {
    // const { state } = useContext(AppContext);
    // const { cart } = state;
    const { state: { cart } } = useContext(AppContext);

    return (
        <header className="Header">
            <h1 className="Header__title">
                <Link to="/">
                    Platzi Conf Merch
                </Link>
            </h1>
            <div className="Header__checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket fa-2x" title="Checkout"></i>
                </Link>
                {cart.length > 0 && 
                    <div className="Header__alert">
                        {cart.length}
                    </div>
                }
            </div>
        </header>
    )
}

export default Header
