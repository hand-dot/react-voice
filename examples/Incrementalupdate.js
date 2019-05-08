import React from "react";
import Speak from "../src/components/Speak";
import AsyncSpeak from "../src/components/AsyncSpeak";
import render from "../src/render";

class Fast extends React.Component {
  state = { i: 1 };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, 1500);
  }

  render() {
    return (
      <React.Fragment>
        <Speak>{this.state.i}</Speak>
      </React.Fragment>
    );
  }
}

class Slow extends React.Component {
  state = { i: 1 };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, 1501);
  }

  render() {
    return (
      <React.Fragment>
        <Speak>{this.state.i % 2 === 1 ? "奇数":"偶数"}</Speak>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  state = {
    words: ["こんにちわ", "こんにちわんこ", "こんにちわんこそば"]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.words.map(w => (
          <AsyncSpeak key={w}>{w}</AsyncSpeak>
        ))}
        <Fast />
        <Slow />
      </React.Fragment>
    );
  }
}

render(<App />);
