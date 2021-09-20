import axios from 'axios';

export default async function getPokemon() {
  const id = Math.floor(Math.random() * 151) + 1;
  console.log('Getting Pokemon with ID: ', id);
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
}
