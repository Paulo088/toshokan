<template>
  <div id="app">
		<sidebar-menu :menu="menu" :collapsed=true>
			<span slot="toggle-icon">
				<i class="fa fa-circle"></i>
			</span>
			<span slot="dropdown-icon">
				<i class="fa fa-caret-down"></i>
			</span>
		</sidebar-menu>
		<h2 class="title is-2 text-color">Toshokan</h2>
		<MenuUser v-if="$store.state.logged"></MenuUser>
		<router-view></router-view>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import MenuUser from './components/menu-user/MenuUser'

export default {
	name: 'app',
	components: { SidebarMenu, MenuUser },
	data () {
		return {
			menu: [
				{
					header: true,
					title: 'Toshokan',
					hiddenOnCollapse: true
				},
				{
					title: 'Início',
					href: '/',
					icon: 'fa fa-home'
				},
				{
					title: 'Usuário',
					icon: 'fa fa-user',
					child: [
						{
							href: '/login',
							title: 'Entrar'
						},
						{
							href: '/register',
							title: 'Cadastrar-se'
						}
					]
				}
			]
		}
	},
	computed: {
		showMenu () {
			return this.store.state.logged
		}
	}
}
</script>

<style scoped>
	@import '../node_modules/bulma/css/bulma.css';

	#app {
		background-color: black;
		color: white;
		padding: 0rem 3rem 0rem 5rem;
	}

	.text-color {
		color: white;
	}
</style>
