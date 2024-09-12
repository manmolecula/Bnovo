<template>
    <div>
      <h2>Список репозиториев:</h2>
      <RepositoryItem
        v-for="repository in repositories"
        :key="repository.id"
        :repository="repository"
        @add-to-favorites="addToFavorites"
      />
    </div>
  </template>
  
  <script>
  import RepositoryItem from './RepositoryItem.vue';
  
  export default {
    components: {
      RepositoryItem
    },
    props: {
      repositories: {
        type: Array,
        required: true
      }
    },
    methods: {
      addToFavorites(repository) {
        this.$emit('add-to-favorites', repository);
      }
    }
  };
  </script>
  