import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Appointment from "@/views/Appointment";
import Test from "@/views/Test";
import Collection from "@/views/Collection";
import Register from "@/views/customer/Register";
import Login from "@/views/customer/Login";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: Appointment
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
