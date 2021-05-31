import {createSelector} from "reselect"

const selectDetail = state => state.detail;


export const selectDetailItems = createSelector(
    [selectDetail],
    detail => detail.detailItems
)