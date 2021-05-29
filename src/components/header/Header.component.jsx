import React from 'react'
import {Link} from "react-router-dom"
import CartDropdown from '../cart-dropdown/CartDropdown.component'
import CartIcon from '../cart-icon/CartIcon.component'
import "./Header.scss"
import {connect} from "react-redux"
import logo from "../../image/logo.png"



function Header ({hidden}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <div className="logo">
                <img className="header-logo"  src={logo} alt="logo"/></div>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP
                </Link>
                <Link className="option" to="/shop">CONTACT
                </Link>
                <CartIcon/>

            </div>
            {
                hidden ? null :
            <CartDropdown/>
            }
        </div>
    )
}
const mapStateToProps = ({cart:{hidden}}) => ({
    hidden
})


export default connect(mapStateToProps)(Header);
