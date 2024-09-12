<template>
    <div>
      <h2>Список с избранными репозиториями</h2>
      <div v-for="favorite in favorites" :key="favorite.id">
        <RepositoryItem :repository="favorite" />
      </div>
    </div>
  </template>
  
  <script>
  import RepositoryItem from './RepositoryItem.vue';
  
  export default {
    components: {
      RepositoryItem
    },
    props: {
      favorites: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  