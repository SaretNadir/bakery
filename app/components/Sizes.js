import React from "react";
import axios from "axios";
import "./Sizes.less"

class Sizes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sizes: []
        }
    }

    componentDidMount() {
        var component = this;
        axios.get('/api/sizes').then(function (response) {
            console.log(response);
            component.setState({ sizes: response.data });
        });
    }

     render() {
        return (
            <div id="Sizes" className="container">
                <h1>Product Size View</h1>
                {this.state.sizes.map((dim) => (
                    <div key={dim._id} className="row">
                        <li className="list-group-item">
                            <div>
                                <h4 className="col col-xs-12">{dim.size}</h4>                            
                            </div>
                            <div className="pull-right action-buttons">
                                <a className="edit"><span className="glyphicon glyphicon-pencil"></span></a>
                                <a className="trash"><span className="glyphicon glyphicon-trash"></span></a>
                            </div>
                        </li>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default Sizes;