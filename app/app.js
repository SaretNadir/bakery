import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import "./app.css";
import Categories from "./components/Categories";
import CreateCategory from "./components/CreateCategories";
import Products from "./components/Products";
import CreateProduct from "./components/CreateProducts";
import HomePage from "./components/HomePage";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/create" component={CreateCategory} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/create" component={CreateProduct} />
            <Route exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
);