
import './App.css';

import {Route,Switch} from "react-router-dom"
import Header from './components/header/Header.component';

import React, {useEffect,lazy,Suspense} from 'react';
import Spinner from "./components/spinner/Spinner"
// import {selectCollectionsForPreview} from "./redux/shop/shop.selectors"

// import {addCollectionAndDocuments} from "./firebase/firebase"
// import {connect} from "react-redux"
// import {createStructuredSelector} from "reselect";

// import CollectionDetail from './components/collection-detail/CollectionDetail.component';
// import HomePage from './pages/homepage/HomePage';
// import ShopPage from './pages/shop/ShopPage';
// import CheckoutPage from './pages/checkout/Checkout.page';
// import DetailPage from './pages/detail-page/DetailPage';


 const HomePage = lazy(() => import('./pages/homepage/HomePage'));
 const ShopPage = lazy(() => import("./pages/shop/ShopPage"));
 const CheckoutPage = lazy(() => import("./pages/checkout/Checkout.page"));
  const DetailPage = lazy(() => import("./pages/detail-page/DetailPage"));

const App = () => {

  // componentDidMount(){
  //   const {collectionsArray} = this.props;


  //   addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})))
  // }



  
  return (
    <div>
      <Header />
      <Switch>
           <Suspense fallback={<Spinner/>}> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route  path='/checkout' component={CheckoutPage} />
         <Route exact path='/detail'  component={DetailPage} />
           
         
         
       
       
         </Suspense> 
       
      </Switch>
    </div>
  );
}

// const mapStateToProps = createStructuredSelector({
//   collectionsArray:selectCollectionsForPreview
// })

export default App;