import React from "react";
import axios from 'axios';

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }

        //this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        var component = this;
        axios.get('/api/products').then(function (response) {
            console.log(response);
            component.setState({ products: response.data });
        });
    }

    //deleteCategory() {}

    render() {
        return (
            <div>
                <h1>Products View</h1>
                <div className="container">
                    {
                        this.state.products.map((prod) => (
                            <div key={prod._id} className="row">
                                <div className="col col-xs-4">{prod.name}</div>
                                <div className="col col-xs-4">{prod.price}</div>
                                <div className="col col-xs-4">{prod.description}</div>
                                {/*  <button onClick={this.deleteCategory} className="btn btn-danger">Delete</button> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Products;