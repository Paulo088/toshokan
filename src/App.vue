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
							href: '/user/login',
							title: 'Entrar'
						},
						{
							href: '/user/register',
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
	},
	watch: {
		'$store.state.user' () {
			if (this.$store.state.user !== null) {
				this.menu[2] = {
					title: 'Livros',
					icon: 'fa fa-book',
					child: [
						{
							href: '/book/register',
							title: 'Cadastrar'
						},
						{
							href: '/book/delete',
							title: 'Remover'
						}
					]
				}
			} else {
				this.menu[2] = {
					title: 'Usuário',
					icon: 'fa fa-user',
					child: [
						{
							href: '/user/login',
							title: 'Entrar'
						},
						{
							href: '/user/register',
							title: 'Cadastrar-se'
						}
					]
				}
			}
		}
	}
}
</script>

<style scoped>
	@import '../node_modules/bulma/css/bulma.css';

	#app {
		background-color: #000;
		color: white;
	}
</style>
