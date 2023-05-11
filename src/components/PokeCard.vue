<template>
    
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePokemonStore } from '../store/getPokemonStore';


const store = usePokemonStore(storeToRefs)
const { pokemons } = store

console.log(pokemons);


</script>

<script>
  export default {
    name: 'pokeCard',
  }
</script>