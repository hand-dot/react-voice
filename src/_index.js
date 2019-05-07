import React from "react";
import fetch from "node-fetch";
import Speak from "./components/Speak";
import AsyncSpeak from "./components/AsyncSpeak";
import render from "./render";

const URL =
  "https://raw.githubusercontent.com/kotofurumiya/pokemon_data/master/data/pokemon_data.json";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      pokemonNames: [],
      words: ["こんにちわ", "こんにちわんこ", "こんにちわんこそば"]
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    // this.timer = setInterval(() => {
    //   this.setState({
    //     i: this.state.i + 1
    //   });
    // }, 1000);

    // fetch(URL)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({ pokemonNames: json.map(j => j.name) });
    //   });
  }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        {this.state.words.map(w => (
          <AsyncSpeak key={w}>{w}</AsyncSpeak>
        ))}
        {/* <Speak>{this.state.i}</Speak> */}
        {/* {this.state.pokemonNames.map(p => (
          <AsyncSpeak key={p}>{p}</AsyncSpeak>
        ))} */}
      </React.Fragment>
    );
  }
}

render(<Counter />);
