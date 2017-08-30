import React from "react";
import axios from "axios";

class CreateProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {
                name: '',
                price: '',
                description: '',
                images: [],
            },
            newImage: '',
            categories: [],
            sizes:[]
        };

        this.createProduct = this.createProduct.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    createProduct(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post("/api/product", this.state.product);
    }

    addImage(event) {
        event.preventDefault();
        this.state.product.images.push(this.state.newImage);
        this.setState({ images: this.state.product.images })

    }

    componentDidMount() {
        var component = this;
        
        axios.get('/api/categories').then(function (response) {
            console.log(response);
            component.setState({ categories: response.data });
        });

         axios.get('/api/sizes').then(function (response) {
            console.log(response);
            component.setState({ sizes: response.data });
        });
    }

    render() {
        var imgStyle = {
            height: 100,
            marginTop: 10,
            margin: 2
        }

        return (
            <div className="container">
                <form>
                    <h2>Add Product</h2>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="productName">Product Name:</label>
                        <input onChange={(event) => this.setState({ product: { ...this.state.product, name: event.target.value } })} type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Product Price:</label>
                        <input onChange={(event) => this.setState({ product: { ...this.state.product, price: event.target.value } })} type="number" min="0" max="10000" className="form-control" placeholder="$ Price" />
                    </div>

                    <div className="form-group">
                        <label>Select Category:</label>
                        <select onChange={(event) => this.setState({ category: event.target.value })} className="form-control">
                            <option value="1" defaultValue="Select">Select</option>
                            {this.state.categories.map((ctg) => (
                                <option key={ctg._id} value={ctg.name}>
                                    {ctg.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Select Size:</label>
                        <select onChange={(event) => this.setState({ size: event.target.value })} className="form-control">
                            <option value="1" defaultValue="Select">Select</option>
                            {this.state.sizes.map((dim) => (
                                <option key={dim._id} value={dim.size}>
                                    {dim.size}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productImage">Product Description:</label>
                        <textarea onChange={(event) => this.setState({ product: { ...this.state.product, description: event.target.value } })} className="form-control" rows="5" placeholder="Product Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">Product Images:</label>
                        <div className="input-group">
                            <input onChange={(event) => this.setState({ newImage: event.target.value })} type="text" className="form-control" placeholder="Image URL" />
                            <span className="input-group-btn"><button onClick={this.addImage} className="btn btn-default">Add Image</button></span></div>

                        {this.state.product.images.map((image, index) => (
                            <img src={image} alt="" key={index} className="col img-rounded" style={imgStyle} />
                        ))}

                    </div>
                    <input onClick={this.createProduct} type="submit" className="btn btn-default col-xs-offset-9 col-xs-3" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateProducts;