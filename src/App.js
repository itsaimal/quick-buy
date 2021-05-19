
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import ShopPage from './pages/homepage/shop/ShopPage';
import {Route,Switch} from "react-router-dom"
import Header from './components/header/Header.component';

function App() {
  return (
    <div className="">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        
        <Route path='/shop' component={ShopPage}/>
   
  
    </Switch>
    </div>
  );
}

export default App;
