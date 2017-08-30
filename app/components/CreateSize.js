import React from "react";
import axios from "axios";

class CreateSize extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            size: ''
        };

        this.CreateSize = this.CreateSize.bind(this);
    }

    CreateSize(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post("/api/size", this.state);
    }

    render() {
        return (
            <div className="container">
                <form>
                    <h2>Add Product Size</h2>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="categoryName">Product Size:</label>
                        <input onChange={(event) => this.setState({ size: event.target.value })} type="text" className="form-control" placeholder="Size" />
                    </div>
                    <input onClick={this.CreateSize} type="submit" className="btn btn-default col-xs-offset-9 col-xs-3" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateSize;