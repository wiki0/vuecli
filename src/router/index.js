import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import BasicTables from '@/components/page/BasicTables';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/BasicTables',
          component:BasicTables
        }

      ]
    }
  ]
})
