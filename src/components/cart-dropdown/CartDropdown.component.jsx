import React from 'react'
import "./CartDropdown.scss"
import {connect} from "react-redux"
import CartItem from '../cart-item/CartItem.component'

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


const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems

})

export default connect(mapStateToProps)(CartDropdown);
