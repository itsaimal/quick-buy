export const addItemToDetail = (detailItems,detailItemToAdd) => 
{
    const existingDetailItem = detailItems.find(detailItem => detailItem.id === detailItemToAdd.id);


    if(existingDetailItem){
        return detailItems.map(detailItem => 
            detailItem.id === detailItemToAdd.id ? {...detailItem
                // ,quantity: cartItem.quantity + 1
            }: detailItem )
    }

    return [...detailItems, {...detailItemToAdd, quantity: 1}]
}


