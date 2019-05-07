import React from "react";
import Speak from "../src/components/Speak";
import render from "../src/render";

class App extends React.Component {
  state = { i: 0 };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <Speak>{this.state.i}</Speak>
      </React.Fragment>
    );
  }
}

render(<App />);
