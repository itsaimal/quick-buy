import React from 'react'
import "./CollectionDetail.scss"
import {connect} from "react-redux"
import { createStructuredSelector } from 'reselect';
import {selectDetailItems} from "../../redux/detail/detail.selectors"
import DetailItem from "../detail-item/DetailItem"



function CollectionDetail({detailItems}) {

    return (
        <div className='details'>
       
        <div
        //  className='detail-items'
         >
          
          {  detailItems.map(detail => (
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
  detailItems: selectDetailItems
});



export default connect(mapStateToProps)(CollectionDetail);
