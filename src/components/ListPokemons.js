import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

const getPokemons = gql`
  {
    pokemons(first: 10) {
      id
      number
      name
    }
  }
`;

export const ListPokemons = () => {
  const { loading, data, error } = useQuery(getPokemons);
  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;

  return (
    <div className="List">
      {data.pokemons.map((pokemon, index) => (
        <Link to={`pokemon/${pokemon.id}`}>
          <div className="container" key={index}>
            <p>{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
