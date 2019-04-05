import React from "react";
import Form from "./form";
import Navbar from "./navbar";

class App extends React.Component {
  handleLogin() {
    console.log("Logging innnnn");
  }
  render() {
    return (
      <>
        <Navbar handleLogin={this.handleLogin} />
        <Form />
      </>
    );
  }
}
export default App;
