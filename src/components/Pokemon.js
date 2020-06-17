import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const getPokemon = gql`
  {
    pokemon(name: "Pikachu") {
      id
      name
      image
      types
    }
  }
`

export const Pokemon = pokemon => {
  const { loading, data, error } = useQuery(getPokemon, { variables: { id: pokemon.id, name: pokemon.name}} )
  if (loading) return ''
  if (error) return `Error: ${error}`
  return (
    <div className='App'>
        <div className="card">
          <div className="content">
            <img src={data.pokemon.image} alt={`${data.pokemon.name}`}/>
            <h1>{data.pokemon.name}</h1>
            <p>{data.pokemon.types}</p>
          </div>
        </div>
    </div>
  )
}