import React from "react";
import fetch from "node-fetch";
import AsyncSpeak from "../src/components/AsyncSpeak";
import render from "../src/render";

const URL =
  "https://raw.githubusercontent.com/kotofurumiya/pokemon_data/master/data/pokemon_data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({ pokemonNames: json.map(j => j.name) });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemonNames.map(p => (
          <AsyncSpeak key={p}>{p}</AsyncSpeak>
        ))}
      </React.Fragment>
    );
  }
}

render(<App />);
