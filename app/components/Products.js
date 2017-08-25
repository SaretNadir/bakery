import React from "react";
import axios from 'axios';
import "./Products.less"

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        var component = this;
        axios.get('/api/products').then(function (response) {
            console.log(response);
            component.setState({ products: response.data });
        });
    }

    render() {
        return (
            <div id="Products" className="container">
                <div className="row">
                    {this.state.products.map((prod) => (
                        <div key={prod._id} className="col-xs-6 col-md-4 col-lg-3">
                            <div className="row list-group">
                                <div className="item col-sm-6 col-md-4">
                                    <div className="thumbnail">
                                        <div className="img-wrap">
                                            <img src={prod.images} alt="" className="group list-group-image" />
                                        </div>
                                        <div className="caption">
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <h4 className="group inner list-group-item-heading">{prod.name}</h4>
                                                </div>
                                                <p className="group inner list-group-item-text">{prod.description}</p>
                                                <div className="col-xs-12">
                                                    <p className="lead">{"$" + prod.price}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <button className="btn btn-default btn-product"><i className="fa fa-plus-circle" aria-hidden="true"></i><span className="hidden-xs">View</span></button>
                                                </div>
                                                <div className="col-xs-6">
                                                    <button className="btn btn-default btn-product"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="hidden-xs">Buy</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Products;