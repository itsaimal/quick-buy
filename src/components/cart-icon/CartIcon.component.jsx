import React from 'react'
import "./CartIcon.scss"
import heart from "../../image/heart.png"
import {toggleCartHidden} from "../../redux/cart/cart.action"

import {connect} from "react-redux";

function CartIcon({toggleCartHidden}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <img src='https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-715x715.png' className="shopping-icon"/>
            <span className="item-count">0</span>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);
