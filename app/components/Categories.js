import React from "react";
import axios from 'axios';

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }

        this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        console.log(new Date(), "componentDidMount");
        var component = this;
        axios.get('/api/categories').then(function(response){
            console.log(response);
            component.setState({categories: response.data});
        });
    }   

    deleteCategory() {

    }

    render() {
        console.log(new Date(), "render");
        return (
            <div>
                <h1>Categories View</h1>
                <div className="container">
                    {
                        this.state.categories.map((ctg) => (
                            <div key={ctg._id} className="row">
                                <div className="col col-xs-4">{ctg.code}</div>
                                <div className="col col-xs-8">{ctg.name}</div>
                                <button onClick={this.deleteCategory} className="btn btn-danger">Delete</button>
                            </div>                            
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Categories;
