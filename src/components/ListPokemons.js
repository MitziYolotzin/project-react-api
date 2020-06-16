import React from "react";
import { getPokemons } from '../graphql/queries'
import { useQuery } from "@apollo/react-hooks";



export const ListPokemons = () => {
  const { loading, data, error } = useQuery(getPokemons)
  if (loading) return "Loading..."
  if (error) return `Error: ${error}`

  return (
    <div className="List">
      {data.pokemons.map((pokemon, index) => (
          <div className="container" key={index}>
              <img src={pokemon.image} alt="pokemon"/>
            <p>{ pokemon.name }</p>
            
          </div>
      ))}
    </div>
  );
};


