<template>
  <div class="header">
    <el-row :gutter="12">
      <!--Logo area-->
      <el-col :xs="12" :sm="12" :md="4">
        <div class="logo" @click="$store.commit('change')">
          <i v-show="$store.state.isCollapse" class="el-icon-arrow-right"></i>
          <i v-show="!$store.state.isCollapse" class="el-icon-arrow-left"></i>
          <span class="logo_prefix">Web</span><span class="logo_suffix">Manager</span>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import store from '@/vuex/store';

  export default {
    store
  }
</script>
<style scoped>
  .header {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 44px;

    font-size: 14px;
    line-height: 44px;
    background-color: #293846;
    box-shadow: 2px 0 3px rgba(0, 0, 0, .5);
    z-index: 1000;
    padding: 0 32px 0 4px;
    overflow: hidden;

  }

  .header .logo {
    float: left;
    cursor: pointer;
    font-size: 22px;
  }

  .el-icon-arrow-left {
    color: aliceblue;
    font-size: 24px;
    margin-left: 10px
  }

  .el-icon-arrow-right {
    color: aliceblue;
    font-size: 24px;
    margin-left: 10px
  }

  .logo_prefix {
    color: #209e91;
  }

  .logo_suffix {
    color: #fff;
  }

</style>
