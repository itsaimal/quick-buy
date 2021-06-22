import DetailActionTypes from "./detail.types"
import {addItemToDetail,removeItemFromDetail} from "./detail.utils"
import SHOP_DATA from "../../pages/shop/shop.data"


const INITIAL_STATE = {
    detailItems: SHOP_DATA
}



const detailReducer = ( state = INITIAL_STATE, action) => {

    switch(action.type) {
        case DetailActionTypes.ADD_ITEM :
            return {
                   
                ...state,
                detailItems: addItemToDetail(state.detailItems,action.payload)
            };
            case DetailActionTypes.REMOVE_ITEM: 
            return {
                ...state,
                detailItems: removeItemFromDetail(state.detailItems,
                    action.payload)
            }

            case DetailActionTypes.CLEAR_ITEM_FROM_DETAIL:
                return {
                    ...state,
                    detailItems: state.detailItems.filter(detailItem => detailItem.id !== action.payload.id)
                }
            default:
                return state;
    }
   

}



export default detailReducer;