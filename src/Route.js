import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import About from './Components/About'
import NavBar from './Components/NavBar'


function RouteConfig() {
	

  return (
	<div>
        <Router>
          <NavBar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route exact path='/product' component={Product}/>
                <Route path='/product/:id' component={ProductItem}/>
                <Route path="*" component={()=><h2>404 ERROR</h2>}></Route>
            </Switch>
        </Router>

	</div>
  );
}

export default RouteConfig;
