<template>
  <div class="pageTitle">
    <div class="pt-left">
      <span class="pt-Home"><router-link to="DashBoard">Home</router-link></span>
      <span class="pt-line"> / </span>
      <span class="pt-page">{{vtitle}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['vtitle'],
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
