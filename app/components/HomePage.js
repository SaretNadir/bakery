import React from "react";
import axios from 'axios';
import "./HomePage.less"

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div id="HomePage">
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
                                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Customer Name <span className="caret"></span></a>
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

                <div id="my-carousel" className="carousel slide" data-ride="carousel" data-interval="4000">
                    <ol className="carousel-indicators">
                        <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#my-carousel" data-slide-to="1"></li>
                        <li data-target="#my-carousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="content/slide1.jpeg" alt="" />
                            <hgroup>
                                <h1>Birthday</h1>
                                <h3>Birthdays bring friends and family together!</h3>
                                <button className="btn btn-default" role="button">View All</button>
                            </hgroup>
                        </div>
                        <div className="item">
                            <img src="content/slide2.jpeg" alt="" />
                            <hgroup>
                                <h1>Baby Shower</h1>
                                <h3>Congratulations on the new addition to your family!</h3>
                                <button className="btn btn-default" role="button">View All</button>
                            </hgroup>
                        </div>
                        <div className="item">
                            <img src="content/slide3.jpeg" alt="" />
                            <hgroup>
                                <h1>Wedding</h1>
                                <h3>We design the perfect cake for your perfect day!</h3>
                                <button className="btn btn-default">View All</button>
                            </hgroup>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#my-carousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    </a>
                    <a className="right carousel-control" href="#my-carousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    </a>
                </div>

                <div id="c-container" className="container">
                    <div className="row">
                        <div className="col-xs-4">
                            <center>
                                <img src="http://images.all-free-download.com/images/graphiclarge/set_of_birthday_cake_vector_528516.jpg" alt="" className="img-circle" />
                                <br />
                                <a href=""><h4>Cakes</h4></a>
                                <p>Text</p>
                            </center>
                        </div>
                        <div className="col-xs-4">
                            <center>
                                <img src="http://images.all-free-download.com/images/graphiclarge/vector_pink_cupcake_311952.jpg" alt="" className="img-circle" />
                                <br />
                                <a href=""><h4>Cupcakes</h4></a>
                                <p>Text</p>
                            </center>
                        </div>
                        <div className="col-xs-4">
                            <center>
                                <img src="http://images.all-free-download.com/images/graphiclarge/realistic_delicious_cookies_design_vector_570561.jpg" alt="" className="img-circle" />
                                <br />
                                <a href=""><h4>Cookies</h4></a>
                                <p>Text</p>
                            </center>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <p>Copyright &copy; QueQueres 2017</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default HomePage;