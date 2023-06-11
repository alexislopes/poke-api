<script setup>
import { ref } from "vue";
import { usePokeApi } from "./composables/pokeApi";

const { search } = usePokeApi()

const termo = ref('');
const pokemon = ref(undefined);


const buscar = async () => {
  const response = await search(termo.value);
  pokemon.value = response.data
}

</script>

<template>
  <div>
    <label>
      Pokémon
      <input type="text" v-model="termo" />
    </label>
    <button @click="buscar">Buscar</button>
  </div>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.other['official-artwork'].front_default" />
    <h1>{{ pokemon.name  }}</h1>
    <div>
      <label for="">
        Altura
        <span>{{ pokemon.height }}</span>
      </label>
      <label for="">
        Peso
        <span>{{ pokemon.weight }}</span>
      </label>

      <h2>Habilidades</h2>
      <div v-for="ability in pokemon.abilities">
        <p>
          {{ ability.ability.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
