import React from 'react'
import CollectionPreview from '../collection-preview/CollectionPreview.component'
import "./CollectionsOverview.scss"
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors"


const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);