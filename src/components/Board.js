import React from "react";
import Test from "./Test";

class Board extends React.Component {
  // constructor, which sets stat
  constructor(props) {
    super(props);
    this.state = {
      tests: [
        { id: 0, name: null, timeLimit: null },
        { id: 1, name: null, timeLimit: null },
        { id: 2, name: null, timeLimit: null },
        { id: 3, name: null, timeLimit: null },
        { id: 4, name: null, timeLimit: null },
        { id: 5, name: null, timeLimit: null },
        { id: 6, name: null, timeLimit: null },
        { id: 7, name: null, timeLimit: null },
        { id: 8, name: null, timeLimit: null },
        { id: 9, name: null, timeLimit: null },
      ],
    };
  }

  // handleClick

  // render test function
  renderTest(i) {
    return <Test test={this.state.tests[i]} />;
  }

  // render function for the board
  render() {
    return (
      <div>
        {this.renderTest(0)}
        {this.renderTest(1)}
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
