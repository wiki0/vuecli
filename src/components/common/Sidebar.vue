<template>
  <div class="sidebar">
    <el-menu default-active="DashBoard" class="el-menu-vertical-demo" :collapse-transition="false" :default-active="onRoutes" @open="handleOpen"
             background-color="#293846"
             text-color="#fff"
             active-text-color="#ffd04b" @close="handleClose" :collapse="$store.state.isCollapse" router>
      <el-menu-item index="DashBoard">
        <i class="el-icon-menu"></i>
        <span slot="title">DashBoard</span>
      </el-menu-item>
      <el-menu-item index="BasicTables">
        <i class="el-icon-tickets"></i>
        <span slot="title">BasicTables</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
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
  .sidebar {
    text-align: left;
  }
</style>
