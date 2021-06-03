import React from 'react'
import "./DetailItem.scss"
import {ClearItemFromDetail, removeItem} from "../../redux/detail/detail.action"
import {connect} from "react-redux"

import ImageGallery from 'react-image-gallery';


 import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";


function DetailItem({item,clearItem,removeItem}) {

    const {imageUrl,price,name,imageUrl2,color,miles,transmission} = item;


    const images = [
      {
        original: imageUrl2,
        thumbnail: imageUrl2,
      },
      {
        original: imageUrl,
        thumbnail: imageUrl,
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

   

    return (
        <div className="detail-item">
       
       {/* <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
       */}

       <ImageGallery items={images} />;

       <button className='remove-detail' onClick={() => clearItem(item)}
       onClick={
         () => removeItem(item)}
        >

          &#10005;
        </button>

       <div className="detail-footer">




            <span className="name">{name}</span>
            <span className="name">{color}</span>
            <span className="name">{transmission}</span>
            <span className="name">{miles}_miles</span>
            <span className="price">
      ${price}
            </span>  

        </div>
        
    </div>
    )
}

const mapDispatchToProps = dispatch => ({

   clearItem: item => dispatch(ClearItemFromDetail(item)),
   removeItem: item => dispatch(removeItem(item))
    
})


export default connect(null,mapDispatchToProps)(DetailItem)
