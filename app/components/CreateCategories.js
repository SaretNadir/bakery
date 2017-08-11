import React from "react";


class CreateCategories extends React.Component {
/*     constructor(props) {
        super(props);
        this.state = {
            name: '',
            code: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } */
   

    render() {
        return (
            <div className="container-fluid">
                <div className="row">                    
                        <form>
                            <h1>Add Category</h1>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="categoryName">Category Name:</label>
                                <input type="text" className="form-control" id="categoryName" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryCode">Category Code:</label>
                                <input type="text" className="form-control" id="categoryCode" placeholder="Code"/>
                            </div>
                            <input type="submit" className="btn btn-default col-xs-offset-9 col-xs-3" value="Submit" />
                        </form>
                    </div>
                </div>
        );
    }
}

export default CreateCategories;
