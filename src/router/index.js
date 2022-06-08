import Vue from 'vue'
import Router from 'vue-router'
import EzCharts from '@/components/EzCharts'
import ShowInfo from '@/components/ShowInfo'
import IpInfo from '@/components/IpInfo'
import DashBoard from '@/components/DashBoard'
import DataView from '@/components/DataView'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/dash',
      name: 'DashBoard',
      component: DashBoard,
      children:[
        {
          path: '/chart',
          name: 'EzCharts',
          component: EzCharts
        },
        {
          path: '/show',
          name: 'ShowInfo',
          component: ShowInfo
        },
        {
          path: '/ip',
          name: 'IpInfo',
          component: IpInfo
        },
        {
          path: '/dataview',
          name: 'DataView',
          component: DataView
        }
      ]
    }
  ]
})
