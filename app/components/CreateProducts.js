import React from "react";
import axios from "axios";


class CreateProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            description:''
        };

        this.createProduct = this.createProduct.bind(this);
    }

    createProduct(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post("/api/category", this.state);
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <form>
                        <h1>Add Product</h1>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="productName">Product Name:</label>
                            <input onChange={(event) => this.setState({ name: event.target.value })} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Product Price:</label>
                            <input onChange={(event) => this.setState({ price: event.target.value })} type="number" min="0" max="10000" className="form-control" placeholder="$ Price" />
                        </div>
                        <div className="form-group">
                            <textarea onChange={(event) => this.setState({ description: event.target.value })} className="form-control" rows="5" placeholder="Product Description"></textarea>  
                        </div>
                        <input onClick={this.createProduct} type="submit" className="btn btn-default col-xs-offset-9 col-xs-3" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateProducts;
