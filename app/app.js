import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import "./app.less";
import Categories from "./components/Categories";
import CreateCategory from "./components/CreateCategories";
import Products from "./components/Products";
import CreateProduct from "./components/CreateProducts";
import Sizes from "./components/Sizes";
import CreateSize from "./components/CreateSize";
import HomePage from "./components/HomePage";
import Admin from "./components/Admin";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#display-menu" aria-expanded="false">
                            <span className="sr-only"></span>
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/" alt="QueQueres">
                            <img src="https://kloudless.com/wp-content/uploads/2016/02/notification.png" alt="" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="display-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/products">Products</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href=""><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user-o" aria-hidden="true"></i><span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="">Your Account</a></li>
                                    <li><a href="">Your Orders</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="">Sign in / Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/categories/create" component={CreateCategory} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/create" component={CreateProduct} />
                <Route exact path="/sizes" component={Sizes} />
                <Route exact path="/sizes/create" component={CreateSize} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/admin" component={Admin} />
            </Switch>

            <footer>
                <div className="container">
                    <p>Copyright &copy; QueQueres 2017</p>
                </div>
            </footer>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
);