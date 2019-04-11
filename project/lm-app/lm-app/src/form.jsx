import React, { Component } from "react";
const request = require("request");

// Add things to form like
// purchase subtotoal
// discount code
// recipt nubmer
// purchase total

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
      },
      order: {
        subtotal: "",
        disCode: "",
        receipt: "",
        total: ""
      }
    };
    this.updateNCAD = this.updateNCAD.bind(this);
    this.updatePN = this.updatePN.bind(this);
    this.updatePC = this.updatePC.bind(this);
    this.updatePID = this.updatePID.bind(this);
    this.updatePL = this.updatePL.bind(this);
    this.updateOD = this.updateOD.bind(this);
    this.updateOR = this.updateOR.bind(this);
    this.updateOS = this.updateOS.bind(this);
    this.updateOT = this.updateOT.bind(this);
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
  updateOD(e) {
    const target = e.target;

    this.setState({
      order: {
        subtotal: this.state.order.subtotal,
        disCode: target.value,
        receipt: this.state.order.receipt,
        total: this.state.order.total
      }
    });
  }
  updateOR(e) {
    const target = e.target;

    this.setState({
      order: {
        subtotal: this.state.order.subtotal,
        disCode: this.state.order.disCode,
        receipt: target.value,
        total: this.state.order.total
      }
    });
  }
  updateOS(e) {
    const target = e.target;

    this.setState({
      order: {
        subtotal: target.value,
        disCode: this.state.order.disCode,
        receipt: this.state.order.receipt,
        total: this.state.order.total
      }
    });
  }
  updateOT(e) {
    const target = e.target;

    this.setState({
      order: {
        subtotal: this.state.order.subtotal,
        disCode: this.state.order.disCode,
        receipt: this.state.order.receipt,
        total: target.value
      }
    });
  }
  handleSubmit(e) {
    request(
      {
        url: "http://0.0.0.0:4000",
        method: "POST",
        json: this.state
      },
      (error, res, body) => {
        if (!error && res.statusCode === 200) {
          console.log(body);
        } else {
          console.log("error: " + error);
          console.log("response.statusCode: " + res.statusCode);
          console.log("response.statusText: " + res.statusText);
        }
      }
    );
    e.preventDefault();
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6 mt-3">
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
              <div className="col-md-6 mt-3">
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
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="subtotal">Order subtotal:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subtotal"
                    id="subtotal"
                    placeholder="Amount in USD"
                    onChange={this.updateOS}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="disCode">Discount code:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="disCode"
                    id="disCode"
                    placeholder="i.e. DC-4231-A"
                    onChange={this.updateOD}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="total">Order total:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="total"
                    id="total"
                    placeholder="Amount in USD"
                    onChange={this.updateOT}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="receipt">Receipt number:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="receipt"
                    id="receipt"
                    placeholder="i.e. 152462521"
                    onChange={this.updateOR}
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
