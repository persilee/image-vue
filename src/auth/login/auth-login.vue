<template>
  <div class="auth-login">
    <div class="form">
      <h1 class="header">用户登录</h1>
      <text-field v-model="name" placeholder="用户" />
      <text-field v-model="password" placeholder="密码" type="password" />
      <button-field text="登录" size="large" @click="onClickLogin" />
    </div>
  </div>
</template>

<script>
import ButtonField from '@/app/components/button-field.vue';
import TextField from '@/app/components/text-field.vue';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'AuthLogin',

  title() {
    return '用户登录';
  },

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      name: '',
      password: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      loading: 'auth/login/loading',
      loginResponseData: 'auth/login/loginResponseData',
    }),
  },

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      login: 'auth/login/login',
    }),
    async onClickLogin() {
      try {
        const response = await this.login({
          name: this.name,
          password: this.password,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },

  /**
   * 使用组件
   */
  components: { TextField, ButtonField },
});
</script>

<style scoped>
.auth-login {
  max-width: 520px;
  margin: 0 auto;
  padding: 32px;
}
</style>
