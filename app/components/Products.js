import React from "react";
import axios from 'axios';
import "./Products.css"

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
            <div>
                <h1>Products View</h1>
                <div>
                    {this.state.products.map((prod) => (
                        <div key={prod._id} className="row col-lg-3 col-md-4 col-xs-6">
                            <div className="row list-group">
                                <div className="item">
                                    <div className="thumbnail">
                                        <img src={prod.image} alt="" className="group list-group-image" />
                                        <div className="caption">
                                            <h4 className="group inner list-group-item-heading">{prod.name}</h4>
                                            <p className="group inner list-group-item-text">{prod.description}</p>
                                            <div className="row">
                                                <div className="col-xs-12 col-md-6">
                                                    <p className="lead">{"$" + prod.price}</p>
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