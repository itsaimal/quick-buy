import React from 'react'
import "./CartDropdown.scss"
import {connect} from "react-redux"
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../redux/cart/cart.action"

function CartDropdown({cartItems, history,dispatch}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
{ cartItems.length ?
(
    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) : (<span className="empty-message">Your cart is empty</span>)
}
                </div>

            <button onClick={()=>{ history.push('./checkout');
        dispatch(toggleCartHidden());}}>your fav</button>
            
        </div>
    )
}


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)

})

export default withRouter(connect(mapStateToProps)(CartDropdown));
