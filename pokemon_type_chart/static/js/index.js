import { getData } from "./fetch.js";



export const loadPokemons = async () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=898';
    let pokeapiData=await getData(url);
    console.log(pokeapiData);
    pokeapiData.results.forEach(pokemon => {
        let pokemon_name = pokemon.name;
        d3.select("#body")
        .append("p").text(pokemon_name)
        
    });
}

loadPokemons();