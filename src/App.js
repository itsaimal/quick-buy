
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import ShopPage from './pages/shop/ShopPage';
import {Route,Switch} from "react-router-dom"
import Header from './components/header/Header.component';
import Checkout from './pages/checkout/Checkout.page';
// import {selectCollectionsForPreview} from "./redux/shop/shop.selectors"

// import {addCollectionAndDocuments} from "./firebase/firebase"
// import {connect} from "react-redux"
// import {createStructuredSelector} from "reselect";
import React from 'react';
import CollectionDetail from './components/collection-detail/CollectionDetail.component';
import DetailPage from './pages/detail-page/DetailPage';

class App extends React.Component {

  // componentDidMount(){
  //   const {collectionsArray} = this.props;


  //   addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})))
  // }



  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route  path='/checkout' component={Checkout} />
        <Route exact path='/detail' component={DetailPage} />
        
       
       
       
       
      </Switch>
    </div>
  );}
}

// const mapStateToProps = createStructuredSelector({
//   collectionsArray:selectCollectionsForPreview
// })

export default App;