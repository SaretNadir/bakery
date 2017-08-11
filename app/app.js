import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import Categories from "./components/Categories";
import CreateCategory from "./components/CreateCategories";
// import Products from "./components/Products";
// import Products from "./components/CreateProducts";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/create" component={CreateCategory} />
{/*             <Route exact path="/products" component={Products} />
            <Route exact path="/products/create" component={CreateProduct} /> */}
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
);