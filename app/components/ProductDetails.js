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
            <div id="ProductDetails" className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">{this.props.product.name}</h4>
                        <hr/>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-6 product-img" >
                                <img className="img-responsive" src={this.props.product.images} alt="" />
                            </div>
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

                            <div className="col-sm-6 product-content">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <p>{this.props.product.description}</p>
                                        {/* <p className="group inner list-group-item-text">{this.props.product.sizes}</p> */}
                                        <p className="lead">{"$" + this.props.product.price}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <select className="form-control" name="select">
                                            <option defaultValue="" >Size</option>
                                            <option value="">6"</option>
                                            <option value="">8"</option>
                                            <option value="">10"</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-6">
                                        <select className="form-control" name="select">
                                            <option defaultValue="" >QTY</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <button className="btn btn-default btn-product"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>Buy</span></button>
                                    </div>
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