import React from "react";
import AsyncSpeak from "./components/AsyncSpeak";
import render from "./render";

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
      </React.Fragment>
    );
  }
}

render(<App />);
