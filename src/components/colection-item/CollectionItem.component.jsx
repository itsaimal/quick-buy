import React from 'react'
import CustomButton from '../custom button/CustomButton.component'
import "./CollectionItem.scss"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.action"
import favorite from "../../image/favourites.png"
import {addDetailItem} from "../../redux/detail/detail.action"
import {withRouter} from "react-router-dom"


//history withRouter in progress

function CollectionItem({item, addItem,addDetailItem,history}) {
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
             


                <CustomButton onClick={() => addDetailItem(item)
                // ,
                // history.push('/detail')
                }className="detail" >
                    View Details
                </CustomButton>

           
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addDetailItem: item => dispatch(addDetailItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))
