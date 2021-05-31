import DetailActionTypes from "./detail.types"


export const addDetailItem = item => ({
    type: DetailActionTypes.ADD_ITEM,
    payload: item
})