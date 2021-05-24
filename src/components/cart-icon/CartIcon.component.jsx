import React from 'react'
import "./CartIcon.scss"
import heart from "../../image/heart.png"
import {toggleCartHidden} from "../../redux/cart/cart.action"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"

import {connect} from "react-redux";

function CartIcon({toggleCartHidden,itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <img src='https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-715x715.png' className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
