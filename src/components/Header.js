import React from 'react'
import { Link } from 'react-router-dom'
import Qubi from '../assets/logo.png'

function Header() {
    return (
        <nav>
            <img src={Qubi} alt="qubi-logo" />
            <div className="navigations">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/getaqubi">Get A Qubi</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Header
