<template>
  <div id="app">
		<sidebar-menu :menu="menu" collapsed="true"/>
		<router-view></router-view>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
	name: 'app',
	components: { SidebarMenu },
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
					icon: 'fas fa-user'
				},
				{
					title: 'Usuário',
					icon: 'fas fa-user',
					child: [
						{
							href: 'login',
							title: 'Entrar'
						},
						{
							href: 'register',
							title: 'Cadastrar-se'
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
	@import '../node_modules/bulma/css/bulma.css';
</style>
