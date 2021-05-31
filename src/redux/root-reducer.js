import {combineReducers} from "redux"
import cartReducer from "./cart/cart.reducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import shopReducer from "./shop/shop.reducer"
import directoryReducer from './directory/directory.reducer';
import detailReducer from "./detail/detail.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };
  
  const rootReducer = combineReducers({
  
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    detail: detailReducer
  });
  
  export default persistReducer(persistConfig, rootReducer);