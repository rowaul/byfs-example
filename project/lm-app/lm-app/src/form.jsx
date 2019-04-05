import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      date: "",
      product: {
        prodName: "",
        prodCount: ""
      }
    };
    this.updateNCD = this.updateNCD.bind(this);
    this.updatePN = this.updatePN.bind(this);
    this.updatePC = this.updatePC.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateNCD(e) {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  }
  updatePN(e) {
    const target = e.target;

    this.setState({
      product: {
        prodName: target.value,
        prodCount: this.state.product.prodCount
      }
    });
  }
  updatePC(e) {
    const target = e.target;

    this.setState({
      product: {
        prodName: this.state.product.prodName,
        prodCount: target.value
      }
    });
  }
  handleSubmit(e) {
    const thing = this.state;
    console.log(thing);
    e.preventDefault();
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
                onChange={this.updateNCD}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                className="form-control"
                name="company"
                id="company"
                placeholder="Company"
                onChange={this.updateNCD}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                className="form-control"
                name="date"
                id="date"
                placeholder="mm/dd/yyyy"
                onChange={this.updateNCD}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prodName">Product:</label>
              <input
                type="text"
                className="form-control"
                name="prodName"
                id="prodName"
                placeholder="Product"
                onChange={this.updatePN}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prodName">Product count:</label>
              <input
                type="text"
                className="form-control"
                name="prodCount"
                id="prodCount"
                placeholder="Count"
                onChange={this.updatePC}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
