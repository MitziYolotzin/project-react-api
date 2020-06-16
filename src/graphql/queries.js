import { gql } from "apollo-boost";


export const getPokemons = gql`{

    pokemons(first: 100) {
        id
        number
        name
        image
        types
    }
}

`;