import React from 'react'
import "./DetailItem.scss"
import {clearItemFromCart ,addItem,removeItem} from "../../redux/cart/cart.action"
import {connect} from "react-redux"




 import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

 import AwesomeSlider from 'react-awesome-slider';
 import 'react-awesome-slider/dist/styles.css';

 import {useHistory} from "react-router-dom";


function DetailItem({item,clearItem,removeItem}) {

    const {imageUrl,price,name,imageUrl2,color,miles,transmission,imageUrl3} = item;

    const history = useHistory();


   

   

    return (
        <div className="detail-item">
       
    
       <div className="slider">

       <AwesomeSlider >
    <div data-src={imageUrl} />
    <div data-src={imageUrl2} />
    <div data-src={imageUrl3} />
  </AwesomeSlider>
</div>


<button className='remove-button' onClick={() => {clearItem(item); history.push("/")}}  

 >
          Close
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
  clearItem: item => dispatch(clearItemFromCart(item)),
 
  removeItem: item => dispatch(removeItem(item))
});


export default connect(null,mapDispatchToProps)(DetailItem)