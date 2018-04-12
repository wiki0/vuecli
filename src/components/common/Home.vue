<template>
  <div class="home">
    <el-container>
      <el-aside style="width: auto">
        <v-sidebar></v-sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <v-head></v-head>
        </el-header>
        <el-main>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import vSidebar from './Sidebar.vue';
  import vHead from './Header.vue';

  export default {
    components: {
      vSidebar,vHead
    }
  }
</script>

<style>
  .slide-fade-enter-active {
    transition: all .2s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
