import React from 'react'
import "./CollectionDetail.scss"
import {connect} from "react-redux"
import { createStructuredSelector } from 'reselect';
import {selectDetailItems} from "../../redux/detail/detail.selectors"
import DetailItem from "../detail-item/DetailItem"



function CollectionDetail({details}) {

    return (
        <div className='details'>
        <div className='cart-items'>
          
          {  details.map(detail => (
              <DetailItem key={detail.id} item={detail} />
            ))
          }
        </div>
        {/* <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          Favorites
        </CustomButton> */}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
details: selectDetailItems
})


export default connect(mapStateToProps)(CollectionDetail);
