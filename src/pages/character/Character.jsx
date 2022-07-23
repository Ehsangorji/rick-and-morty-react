import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: {},
    };
  }

  componentDidMount() {
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => response.json())
    //   .then((charactersList) => {
    //     this.setState({ characters: charactersList.results });
    //   });

    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      //   console.log(response.data.results);
      this.setState({ characters: response.data.results });
    });
  }

  // ---------------------------------------------------------------------------------------
  render() {
    console.log("stateeeeeeeeeeeeeeee" + this.state.characters);
    return (
      <div>
        <p className="bg-warning">
          <Link to="/">Home</Link>
        </p>

        <ul className="bg-success">
          {console.log(this.state.characters)}
          <h1>charactersList</h1>
          {/* <ul>
            {this.state.characters.map((character) => (
              <li key={character.id}>
                {character.name} {character.species}
              </li>
            ))}
          </ul> */}
        </ul>
      </div>
    );
  }
}

export default Character;
