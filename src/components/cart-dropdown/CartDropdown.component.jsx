import React from 'react'
import "./CartDropdown.scss"
import {connect} from "react-redux"
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from "../../redux/cart/cart.selectors"

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
{
    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
}
                </div>

            <button>your fav</button>
            
        </div>
    )
}


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)

})

export default connect(mapStateToProps)(CartDropdown);
