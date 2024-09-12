<template>
    <div>
      <div class="header">
        <SearchForm @search="fetchRepositories" />
      </div>
      <div class="main-content">
        <div class="repository-section">
          <RepositoryList :repositories="repositories" @add-to-favorites="addFavorite" />
        </div>
        <div class="favorite-section">
          <FavoriteList :favorites="favorites" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SearchForm from './SearchForm.vue';
  import RepositoryList from './RepositoryList.vue';
  import FavoriteList from './FavoriteList.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'HomePage',
    components: {
      SearchForm,
      RepositoryList,
      FavoriteList
    },
    computed: {
      ...mapGetters(['favorites'])
    },
    methods: {
      fetchRepositories(query) {
        fetch(`https://api.github.com/search/repositories?q=${query}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.repositories = data.items;
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      },
      ...mapActions(['addFavorite'])
    },
    data() {
      return {
        repositories: []
      };
    }
  };
  </script>
  <style scoped>
  .header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.main-content {
  display: flex;
  justify-content: space-between;
}
.repository-section, .favorite-section {
  width: 325px;
}
.repository-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.favorite-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>