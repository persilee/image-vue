<template>
  <div class="app-sidebar">
    <app-sidebar-item-brand />
    <app-sidebar-item-popular />
    <app-sidebar-item-add />
    <app-sidebar-item-theme />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppSidebarItemAdd from './components/app-sidebar-item-add.vue';
import AppSidebarItemBrand from './components/app-sidebar-item-brand.vue';
import AppSidebarItemPopular from './components/app-sidebar-item-popular.vue';
import AppSidebarItemTheme from './components/app-sidebar-item-theme.vue';

export default defineComponent({
  name: 'AppSidebar',

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
  components: { AppSidebarItemBrand, AppSidebarItemPopular, AppSidebarItemAdd, AppSidebarItemTheme },
});
</script>

<style scoped>
@import './styles/app-sidebar.css';
</style>
