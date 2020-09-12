import Vue from 'vue'
import VueRouter from 'vue-router'
import Appointments from '../views/Appointments.vue'
import Make from '../views/Make.vue'
import Info from 'components/Info.vue'
import Confirmation from 'components/Confirmation.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Appointments',
    component: Appointments
  },
  {
    path: '/make',
    name: 'Make Appointments',
    component: Make,
    children: [
      {
        path: "info", 
        component: Info
      },
      {
        path: "confirmation",
        component: Confirmation
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
