<template>
    <button @click="toggleFavorite" :class="{'is-favorite': isFavorite}">
      <span v-if="isFavorite">❤️</span>
      <span v-else>🤍</span>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      repository: {
        type: Object,
        required: true
      },
      isFavorite: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      toggleFavorite() {
        if (this.isFavorite) {
          this.$store.dispatch('removeFavorite', this.repository);
        } else {
          this.$store.dispatch('addFavorite', this.repository);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
    outline: none;
  }
  
  button.is-favorite {
    color: red;
  }
  </style>
  