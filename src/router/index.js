import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Users/Login/Login'
import Register from '../views/Users/Register/Register'
import Details from '../views/Books/Details/Details'
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
		path: '/user/login',
		name: 'userLogin',
		component: Login
	},
	{
		path: '/user/register',
		name: 'userRegister',
		component: Register
	},
	{
		path: '/user/edit',
		name: 'userEdit',
		component: Register
	},
	{
		path: '/book/details/:id',
		name: 'bookDetails',
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
