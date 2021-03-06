import React from "react"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component"


import {Route} from "react-router-dom"
import Collection from "../collection/Collection.component";



const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;