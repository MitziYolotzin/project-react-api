import React from "react";
import { getPokemons } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

import { CardPokemon } from "./CardPokemon";
import "bulma/css/bulma.css";

export const ListPokemons = () => {
  const { loading, data, error } = useQuery(getPokemons);
  if (loading)
    return (
      <div className="button-load">
        {" "}
        <button class="button is-link is-loading is-large">Loading</button>{" "}
      </div>
    );
  if (error) return `Error: ${error}`;

  return (
    <div className="container-list">
      {data.pokemons.map((pokemon, index) => (
        <CardPokemon key={index} {...pokemon} />
      ))}
    </div>
  );
};
