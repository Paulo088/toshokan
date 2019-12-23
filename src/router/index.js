import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Details from '../views/Details/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/details/:name/:img',
		name: 'details',
		component: Details
	}
]

const router = new VueRouter({
  routes
})

export default router
