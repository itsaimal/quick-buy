import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import DetailItem from '../../components/detail-item/DetailItem';
import "./DetailPage.scss"

function DetailPage({cartItems}) {
    return (
        <div className="detail-page">
             {
        cartItems.slice(-1).filter((item, idx) => idx < 1).map(cartItem => (
          <DetailItem key={cartItem.id} item={cartItem} />
        ))}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

export default connect(mapStateToProps)(DetailPage)
