import React from 'react'
import "./DetailItem.scss"
import {ClearItemFromDetail} from "../../redux/detail/detail.action"
import {connect} from "react-redux"

function DetailItem({item,clearItem}) {

    const {imageUrl,price,name} = item;

    return (
        <div className="collection-item">
       
       <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>

       <div className="collection-footer">




            <span className="name">{name}</span>
            <span className="price">
      ${price}
            </span>   <div className='remove-button' onClick={() => clearItem(item)}>
          &#10005;
        </div>

        </div>
        
    </div>
    )
}

const mapDispatchToProps = dispatch => ({

   clearItem: item => dispatch(ClearItemFromDetail(item))
    
})


export default connect(null,mapDispatchToProps)(DetailItem)
