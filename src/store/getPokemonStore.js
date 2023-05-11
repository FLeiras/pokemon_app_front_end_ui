import { defineStore } from "pinia";
import { getPokemon } from "../assets/getPokemons";

export const usePokemonStore = defineStore("usePokemon", () => {
  const pokemons = [];

  const getPokemons = () => {
    pokemons = getPokemon();
  };
});
