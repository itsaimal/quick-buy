import DetailActionTypes from "./detail.types"

const INITIAL_STATE = {
    detailItems: []
}



const detailReducer = ( state = INITIAL_STATE, action) => {

    switch(action.type) {
        case DetailActionTypes.ADD_ITEM :
            return {
                   
                ...state,
                detailItems: [...state.detailItems,action.payload]
            }
            default:
                return state;
    }
   

}



export default detailReducer;