import React from "react";
import pokeball from "./static/pokemon.svg";
import "./App.css";
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="pokeball" alt="pokeball" />
        <h1>Hello! What is your favorite Pokémon?</h1>
        <Link to="pokemons">
          <button class="button is-link is-rounded">Enter</button>
        </Link>
      </header>
    </div>
  );
}

export default App;
