//*********************************************************
//  Calling every pages

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import React from "react";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Announcement />
                <Switch>
                    <Route path="/pages/Register">
                        <Register/>
                    </Route>
                    <Route path="/pages/Login">
                        <Login/>
                    </Route>
                    <Route path="/pages/ProductList">
                        <ProductList/>
                    </Route>
                    <Route path="/pages/Product">
                        <Product/>
                    </Route>
                    <Route path="/pages/Cart">
                        <Cart/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;