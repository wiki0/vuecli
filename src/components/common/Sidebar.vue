<template>
  <div class="sidebar">
    <el-menu default-active="DashBoard" class="el-menu-vertical-demo" :default-active="onRoutes" @open="handleOpen"
             @close="handleClose" :collapse="$store.state.isCollapse" router>
      <el-menu-item index="DashBoard">
        <i class="el-icon-menu"></i>
        <span slot="title">DashBoard</span>
      </el-menu-item>
      <el-menu-item index="BasicTables">
        <i class="el-icon-tickets"></i>
        <span slot="title">BasicTables</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import store from '@/vuex/store';

  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    store
  }
</script>
<style scoped>
</style>
