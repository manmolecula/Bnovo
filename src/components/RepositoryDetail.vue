<template>
    <div class="repository-detail">
        <h2>{{ repository.full_name }}</h2>
        <img class="avatar" :src="repository.owner.avatar_url" alt="Avatar" />
        <p><strong>Description:</strong> {{ repository.description }}</p>
        <p><strong>Stars:</strong> {{ repository.stargazers_count }}</p>
        <p><strong>Forks:</strong> {{ repository.forks_count }}</p>
        <p><strong>Open Issues:</strong> {{ repository.open_issues_count }}</p>
        <p><strong>Watchers:</strong> {{ repository.watchers_count }}</p>
        <p><strong>Default Branch:</strong> {{ repository.default_branch }}</p>
        <p><strong>Created At:</strong> {{ new Date(repository.created_at).toLocaleDateString() }}</p>
        <p><strong>Last Updated:</strong> {{ new Date(repository.updated_at).toLocaleDateString() }}</p>
        <p><strong>Size:</strong> {{ repository.size }} KB</p>
      </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        repository: null,
      };
    },
    created() {
      this.fetchRepositoryDetails();
    },
    methods: {
      fetchRepositoryDetails() {
        fetch(`https://api.github.com/repositories/${this.id}`)
          .then((response) => response.json())
          .then((data) => {
            this.repository = data;
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .repository-detail {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .avatar {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  </style>
  