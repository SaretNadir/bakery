import React from "react";
import axios from 'axios';
import "./Categories.css"

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }

        //this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        var component = this;
        axios.get('/api/categories').then(function (response) {
            console.log(response);
            component.setState({ categories: response.data });
        });
    }

    //deleteCategory() {}
    render() {
        return (
            <div>
                <h1>Categories View</h1>
                <div className="container">
                    {this.state.categories.map((ctg) => (
                        <div key={ctg._id} className="row">
                            <li className="list-group-item">
                                <div className="cat-name">
                                    <h4 className="col col-xs-12">{ctg.name}</h4>
                                    <p className="col col-xs-12">{ctg.code}</p>
                                </div>
                                <div className="pull-right action-buttons">
                                    <a href="http://www.jquery2dotnet.com" className="edit"><span className="glyphicon glyphicon-pencil"></span></a>
                                    <a href="http://www.jquery2dotnet.com" className="trash"><span className="glyphicon glyphicon-trash"></span></a>
                                </div>
                            </li>
                            {/*  <button onClick={this.deleteCategory} className="btn btn-danger">Delete</button> */}
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Categories;