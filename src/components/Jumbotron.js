import React from "react";
import { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="jumbotron-header">The Curse of the Current Reviews</h1>
        <p className="jumbotron-body">
          When you want to buy any application from the Apple iTunes store you
          have more choices than you can handle. Most of the users scroll past
          the application description completely avoiding it like ads displayed
          on the right column of your webpage. Their choice is dependent on
          three important factors price, screenshot and reviews.
        </p>
      </div>
    );
  }
}
export default Jumbotron;
