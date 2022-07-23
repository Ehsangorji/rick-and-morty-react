import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Dashboard extends Component {
  render() {
    return (
      <div className="bg-danger col-12 p-0" style={{ height: "100vh" }}>
        <div className="bg-dark text-white col-12 py-5 d-flex justify-content-around">
          <div>
            <Link to="/">Home</Link>
          </div>
          <Link to="/Character">Character</Link>
          <Link to="/Episode">Episode</Link>
          <Link to="/Location">Location</Link>
        </div>
        <div>5555555555555555555555555555555555555555</div>
      </div>
    );
  }
}

export default Dashboard;
