<template>
  <div class="pageTitle">
    <div class="pt-left">
      <i class="el-icon-menu" @click="$store.commit('change')"></i>
      <span class="pt-Home"><router-link to="DashBoard">Home</router-link></span>
      <span class="pt-line"> / </span>
      <span class="pt-page">{{vtitle}}</span>

    </div>
    <div class="pt-right"><h2>{{vtitle.toUpperCase()}}</h2></div>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  export default {
    props: ['vtitle'],
    store
  }

</script>
<style scoped>
  .pageTitle {
    clear: both;
    height: 55px;

  }

  .pt-left {
    float: left;
  }

  .pt-right {
    float: right;
  }

  .pt-Home {
    font-size: 20px;
  }

  .pt-line {
    color: #ccc;
  }

  a {
    color: #209e91;
  }
</style>
