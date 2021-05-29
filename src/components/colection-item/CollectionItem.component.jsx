import React from 'react'
import CustomButton from '../custom button/CustomButton.component'
import "./CollectionItem.scss"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.action"
import favorite from "../../image/favourites.png"

function CollectionItem({item, addItem}) {
    const {name,price,imageUrl,miles,transmission,color} = item;
    return (
        <div className="collection-item">

            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>

            <div className="car-title">
            <span className="title">{name}</span>

            </div>



                <div className="collection-footer">
                  
                    <span className="name">{color}</span>
                    <span className="name">{miles}_miles</span>
                    <span className="name">{transmission}</span>

                    <span className="price">${price}</span>

                </div>
                
                   <img className="fav-button" onClick={() => addItem(item)} src={favorite} alt="favorite"/>
             


                <CustomButton className="detail" >
                    View Details
                </CustomButton>

           
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
