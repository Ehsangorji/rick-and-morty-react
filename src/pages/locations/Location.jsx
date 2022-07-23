import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((charactersList) => {
        this.setState({ characters: charactersList.results });
      });
  }
  // ---------------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <p className="bg-warning">
          <Link to="/">Home</Link>
        </p>

        <ul className="bg-success">
          {console.log(this.state.characters)}
          <h1>location</h1>
          <ul>
            {this.state.characters.map((character) => (
              <li key={character.id}>
                {character.name} {character.species}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

export default Episode;
