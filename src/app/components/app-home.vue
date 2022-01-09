<template>
  <div>欢迎：）{{ isLoggedIn }}</div>
  <button class="button" @click="onClickPushMessageButton">Push Message</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },

  methods: {
    ...mapActions({
      pushMessage: 'notification/pushMessage',
    }),

    onClickPushMessageButton() {
      this.pushMessage({
        content: '😙😝🤣☺️😒🤓😜',
        icon: 'cloud',
      });
    },
  },
};
</script>