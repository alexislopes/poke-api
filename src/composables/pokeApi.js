import axios from "axios";

export const usePokeApi = () => {

  const search = (pokemon) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  }

  return { search }
}