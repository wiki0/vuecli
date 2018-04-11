<template>
  <div>
    <v-pageTitle vtitle="BasicTables"></v-pageTitle>

    <el-row>
      <el-col :span="24">
        <expandTable></expandTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <editTable></editTable>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <fixedColumnTable></fixedColumnTable>
      </el-col>
    </el-row>

  </div>

</template>

<script>
  import vPageTitle from '../common/PageTitle.vue';
  import expandTable from '../tables/expandTable.vue';
  import editTable from '../tables/editTable.vue';
  import fixedColumnTable from '../tables/fixedColumnTable.vue';


  export default {
    components: {
      vPageTitle, expandTable, editTable, fixedColumnTable
    },
    methods: {}
  }
</script>

<style scoped>

</style>
