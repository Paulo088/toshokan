import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Details from '../views/Details/Details'
import BookRegister from '../views/Books/Register/BookRegister'
import BookDelete from '../views/Books/Delete/BookDelete'

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
		path: '/edit',
		name: 'edit',
		component: Register
	},
	{
		path: '/details/:id',
		name: 'details',
		component: Details
	},
	{
		path: '/book/register',
		name: 'bookRegister',
		component: BookRegister
	},
	{
		path: '/book/register/:id',
		name: 'bookEdit',
		component: BookRegister
	},
	{
		path: '/book/delete',
		name: 'bookDelete',
		component: BookDelete
	}
]

const router = new VueRouter({
  routes
})

export default router
