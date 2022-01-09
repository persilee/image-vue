<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import AppLayout from '@/app/layout/app-layout.vue';
import { mapActions, mapMutations } from 'vuex';
import { getStorage } from './app.service';

export default {
  data() {
    return {
      layout: 'AppLayout',
    };
  },

  created() {
    const token = getStorage('nid');
    if (token) {
      this.setToken(token);
      this.configApiHttpClientAuthHeader(token);
    }
  },

  methods: {
    ...mapMutations({
      setToken: 'auth/setToken',
    }),

    ...mapActions({
      configApiHttpClientAuthHeader: 'auth/configApiHttpClientAuthHeader',
    }),
  },

  components: {
    AppLayout,
  },
};
</script>

<style>
@import './styles/normalize.css';
@import './styles/app.css';
@import './styles/theme.css';
@import './styles/base.css';
@import './styles/page.css';
@import './styles/form.css';
@import './styles/button.css';
</style>
