import axios from 'axios';

export default async function getPokemons() {
  return await axios.get('https://pokeapi.co/api/v2/pokemon/');
}
