import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume'
import Map from '@/components/maps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
