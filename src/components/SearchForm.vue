<template>
    <div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Введите ключевое слово для поиска..."
        @input="searchRepositories"
      />
      <CopyToClipboard :textToCopy="searchQuery" />
    </div>
  </template>
  
  <script>
  import CopyToClipboard from './CopyToClipboard.vue';
  
  export default {
    components: {
      CopyToClipboard
    },
    data() {
      return {
        searchQuery: '',
        debounceTimer: null
      };
    },
    methods: {
      searchRepositories() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          if (this.searchQuery.trim()) {
            this.$emit('search', this.searchQuery);
          }
        }, 300);
      }
    }
  };
  </script>
  
  
  <style scoped>
  .search-form {
    display: flex;
    align-items: center;
  }
  
  input {
    padding: 8px;
    margin-right: 8px;
    flex: 1;
  }
  
  button {
    padding: 8px;
  }
  </style>
  