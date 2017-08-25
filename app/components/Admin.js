import React from "react";
import axios from 'axios';
import "./Admin.less"

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div id="Admin">
                <nav className="navbar navbar-fixed-top navbar-inverse">
                    <div>
                        <div className="navbar-header">
                            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#display-menu" aria-expanded="false">
                                <span className="sr-only"></span>
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/admin" alt="QueQueres">Admin</a>
                        </div>

                        <div className="collapse navbar-collapse" id="display-menu">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/settings">Settings</a></li>
                                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Customer Name <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="">Your Account</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="">Sign in / Sign out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li className="active"><a href="">Products</a></li>
                                <li><a href="">Categories</a></li>
                                <li><a href="">Orders</a></li>
                                <li><a href="">Users</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h2 className="page-header">Page Header</h2>
                            <div><p>Main Content</p></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Admin;