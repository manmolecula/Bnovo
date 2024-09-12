<template>
    <div class="repository-item">
      <img :src="repository.owner.avatar_url" alt="Avatar" />
      <div class="info">
        <a :href="repository.html_url" target="_blank">{{ repository.full_name }}</a>
        <p>Stars: {{ repository.stargazers_count }}</p>
        <p>Forks: {{ repository.forks_count }}</p>
        <FavoriteBtn 
          :repository="repository" 
          :isFavorite="isFavorite" 
        />
        <button @click="goToDetails" class="repository-button-about">Подробнее</button>
      </div>
    </div>
  </template>
  
  <script>
  import FavoriteBtn from './FavoriteBtn.vue';
  import { mapGetters } from 'vuex';
  
  export default {
    components: {
      FavoriteBtn
    },
    props: {
      repository: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters(['favorites']),
      isFavorite() {
        return this.favorites.some(fav => fav.id === this.repository.id);
      }
    },
    methods: {
      goToDetails() {
        this.$router.push({ name: 'repository-detail', params: { id: this.repository.id } });
      }
    }
  };
  </script>
  
  <style scoped>
  .repository-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, .2);
    width: 300px;
  }
  
  .repository-item img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .repository-item .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .repository-button, .repository-button-about {
    margin-bottom: 5px;
    padding: 5px 10px;
    width: 100px;
  }
  </style>
  