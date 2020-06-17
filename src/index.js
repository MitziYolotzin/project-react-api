import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";

import App from "./App";
import { ListPokemons } from "./components/ListPokemons.js";
import { Pokemon } from "./components/Pokemon";
import { SearchForm } from "./components/SearchForm";

import * as serviceWorker from "./serviceWorker";
import { Router } from "@reach/router";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://graphql-pokemon.now.sh/" }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App path="/" />
      <ListPokemons path="pokemons" />
      <Pokemon path="pokemon/:id" />
      <SearchForm path="search" />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
