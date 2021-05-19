import React from 'react'
import {Link} from "react-router-dom"
import "./Header.scss"

function Header () {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <div className="logo">
                Logo</div>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP
                </Link>
                <Link className="option" to="/shop">CONTACT
                </Link>

            </div>
            
        </div>
    )
}

export default Header
