import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      address: "",
      date: "",
      product: {
        prodName: "",
        prodCount: "",
        prodID: "",
        prodLoc: ""
      }
    };
    this.updateNCAD = this.updateNCAD.bind(this);
    this.updatePN = this.updatePN.bind(this);
    this.updatePC = this.updatePC.bind(this);
    this.updatePID = this.updatePID.bind(this);
    this.updatePL = this.updatePL.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateNCAD(e) {
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
        prodCount: this.state.product.prodCount,
        prodID: this.state.product.prodID,
        prodLoc: this.state.product.prodLoc
      }
    });
  }
  updatePC(e) {
    const target = e.target;

    this.setState({
      product: {
        prodName: this.state.product.prodName,
        prodCount: target.value,
        prodID: this.state.product.prodID,
        prodLoc: this.state.product.prodLoc
      }
    });
  }
  updatePID(e) {
    const target = e.target;

    this.setState({
      product: {
        prodName: this.state.product.prodName,
        prodCount: this.state.product.prodCount,
        prodID: target.value,
        prodLoc: this.state.product.prodLoc
      }
    });
  }
  updatePL(e) {
    const target = e.target;

    this.setState({
      product: {
        prodName: this.state.product.prodName,
        prodCount: this.state.product.prodCount,
        prodID: this.state.product.prodID,
        prodLoc: target.value
      }
    });
  }
  handleSubmit(e) {
    (async () => {
      const rawResponse = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: "no-cors",
        body: JSON.stringify(this.state)
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
    e.preventDefault();
  }
  render() {
    return (
      <>
        <div className="container-fluid p-3">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={this.updateNCAD}
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
                    onChange={this.updateNCAD}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="Street, City, State, Zip"
                    onChange={this.updateNCAD}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    id="date"
                    placeholder="yyyy-mm-dd"
                    onChange={this.updateNCAD}
                  />
                </div>
              </div>
              <div className="col-md-6">
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
                  <label htmlFor="prodName">Product identifier:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="prodID"
                    id="prodID"
                    placeholder="GTIN, IFT PID, etc..."
                    onChange={this.updatePID}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="prodName">Product source identifier:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="prodLoc"
                    id="prodLoc"
                    placeholder="GLN, IFT FID, etc..."
                    onChange={this.updatePL}
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
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
