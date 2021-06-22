export const addItemToDetail = (detailItems,detailItemToAdd) => 
{
    const existingDetailItem = detailItems.find(detailItem => detailItem.id === detailItemToAdd.id);


    if(existingDetailItem){
        return detailItems.map(detailItem => 
            detailItem.id === detailItemToAdd.id ? {...detailItem
                // ,quantity: detailItem.quantity + 1
            }: detailItem )
    }

    return [ {...detailItemToAdd, quantity: 0}]
}


export const removeItemFromDetail = (detailItems, detailItemToRemove) => {

const existingDetailItem = detailItems.find(
    detailItem => detailItem.id === detailItemToRemove.id
)

if(existingDetailItem){
    return detailItems.filter(detailItem => detailItem.id !== detailItemToRemove.id)
}

return detailItems.map(
    detailItem => detailItem.id === detailItemToRemove.id ?
    {...detailItem, quantity: detailItem.quantity -1} : detailItem
)
}

