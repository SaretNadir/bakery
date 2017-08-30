import React from "react";
import axios from 'axios';
import "./ProductDetails.less"

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        // }
    }

    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="group inner list-group-item-heading">{this.props.product.name}</h4>
                    </div>
                    <div className="modal-body">
                        <div className="thumbnail">
                            <img src={this.props.product.images} alt="" />

                            {/* <img src={this.props.product.images} alt="" /> */}


                            {/* <div id="my-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="item">
                                        <img src={this.props.product.images} alt="" />                                        
                                    </div>
                                </div>
                                <a className="left carousel-control" href="#my-carousel" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                </a>
                                <a className="right carousel-control" href="#my-carousel" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                </a>
                            </div> */}


                            <p className="group inner list-group-item-text">{this.props.product.description}</p>
                            <p className="lead">{"$" + this.props.product.price}</p>
                            <div className="row">
                                <div className="col-xs-6">
                                    <button className="btn btn-default btn-product"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="hidden-xs">Buy</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;