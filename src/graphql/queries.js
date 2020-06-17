import { gql } from "apollo-boost";


export const getPokemons = gql`{

    pokemons(first: 120) {
        id
        number
        name
        image
        types
    }
}

`;