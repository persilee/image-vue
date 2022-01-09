<template>
  <div>欢迎：）{{ isLoggedIn }}</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
};
</script>