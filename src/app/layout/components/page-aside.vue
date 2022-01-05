<template>
  <div class="page-aside">
    <app-sidebar />
  </div>
</template>

<script>
import AppSidebar from '@/app/sidebar/app-sidebar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageAside',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {},

  /**
   * 使用组件
   */
  components: { AppSidebar },
});
</script>

<style scoped></style>
