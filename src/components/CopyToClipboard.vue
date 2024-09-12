<template>
    <button @click="copyText">
      {{ copied ? 'Copied' : 'Copy' }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      textToCopy: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        copied: false
      };
    },
    methods: {
      copyText() {
        navigator.clipboard.writeText(this.textToCopy).then(() => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        });
      }
    }
  };
  </script>
  