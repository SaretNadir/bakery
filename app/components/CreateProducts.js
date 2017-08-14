import React from "react";
import axios from "axios";

class CreateProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            description: '',
            newImage:'',
            images: []
        };

        this.createProduct = this.createProduct.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    createProduct(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post("/api/product", this.state);
    }

    addImage(event) {
        event.preventDefault();
        this.state.images.push(this.state.newImage);
        this.setState({images:this.state.images})

    }

    render() {
        
        var imgStyle = {
            height: 100,
            marginTop: 10,
            margin:2
        }

        return (
            <div>
                <div className="row">
                    <form>
                        <h2>Add Product</h2>
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
                            <label htmlFor="productImage">Product Description:</label>
                            <textarea onChange={(event) => this.setState({ description: event.target.value })} className="form-control" rows="5" placeholder="Product Description"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productImage">Product Images:</label>
                            <input onChange={(event) => this.setState({ newImage: event.target.value })} type="text" className="form-control" placeholder="Image URL" />
                            <button onClick={this.addImage} className="btn btn-default">Add Image</button>

                            {this.state.images.map((image,index) => (
                                <img src={image} alt="" key={index} className="col img-rounded" style={imgStyle} />
                            ))}

                        </div>
                        <input onClick={this.createProduct} type="submit" className="btn btn-default col-xs-offset-9 col-xs-3" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateProducts;
