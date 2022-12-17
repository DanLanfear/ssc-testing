import React from "react";
import Test from "./Test";

class Board extends React.Component {
  // constructor, which sets stat
  constructor(props) {
    super(props);
    this.state = {
      tests: Array(10).fill(null),
    };
  }

  // handleClick

  // render test function
  renderTest(i) {
    return <Test name={this.state.tests[i]} />;
  }

  // render
  render() {
    return (
      <div>
        {this.renderTest(0)}
        {this.renderTest(2)}
        {this.renderTest(3)}
        {this.renderTest(4)}
        {this.renderTest(5)}
        {this.renderTest(6)}
        {this.renderTest(7)}
        {this.renderTest(8)}
        {this.renderTest(9)}
      </div>
    );
  }
}

export default Board;
