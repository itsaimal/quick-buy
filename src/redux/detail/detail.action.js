import DetailActionTypes from "./detail.types"


export const addDetailItem = item => ({
    type: DetailActionTypes.ADD_ITEM,
    payload: item
})

export const ClearItemFromDetail = item => ({
    type: DetailActionTypes.CLEAR_ITEM_FROM_DETAIL,
    payload:item
})