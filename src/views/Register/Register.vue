<template>
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box">
						<div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input v-model="user.name" type="text" placeholder="e.g. Pato Donald" class="input" required>
								<span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
						<div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left">
                <input v-model="user.username" type="text" placeholder="e.g. patinho" class="input" required>
								<span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input v-model="user.email" type="email" placeholder="e.g. pato.donald@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input v-model="user.password" type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
						<div class="field">
              <label class="label">Confirm Password</label>
              <div class="control has-icons-left">
                <input v-model="user.replyPassword" type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
							<button @click="save()" class="button is-primary">
                {{btnSave}}
              </button>
							<button v-if="edit" @click="login()" type="button" class="button is-success btn-padding">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
	name: 'register',
	data () {
		return {
			user: {
				name: '',
				username: '',
				email: '',
				password: '',
				replyPassword: '',
				permissions: 'user',
				books: []
			},
			btnSave: 'Cadastre-se',
			edit: true
		}
	},
	methods: {
		async save () {
			if (this.user.password === this.user.replyPassword) {
				delete (this.user.replyPassword)
				if (this.btnSave === 'Cadastre-se') {
					this.$services.users.post(this.user).then(data => {
						this.$alert('Cadastrado com sucesso!')
						this.resetInputs()
						this.$router.push({ name: 'login' })
					}).catch(err => {
						this.$alert('Erro ao cadastrar!')
						console.error('register error:', err)
					})
				} else {
					this.$services.users.patch(this.$store.state.user.id, this.user).then(data => {
						this.$alert('Salvo com sucesso!')
						this.$store.commit('setUser', data.data)
						this.$router.push({ name: 'home' })
					}).catch(err => {
						this.$alert('Erro ao salvar!')
						console.error('save error:', err)
					})
				}
			} else {
				this.$alert('As senhas não são iguais.')
			}
		},
		resetInputs () {
			this.user.name = ''
			this.user.username = ''
			this.user.email = ''
			this.user.password = ''
			this.user.replyPassword = ''
			this.user.permissions = 'user'
			this.btnSave = 'Cadastre-se'
		},
		loadFields () {
			this.user.name = this.$store.state.user.name
			this.user.username = this.$store.state.user.username
			this.user.email = this.$store.state.user.email
			this.user.password = this.$store.state.user.password
			this.user.replyPassword = this.$store.state.user.password
			this.user.permissions = this.$store.state.user.permissions
			this.btnSave = 'Salvar'
		},
		login () {
			this.$router.push({ name: 'login' })
		},
		verifRoute () {
			if (this.$route.name === 'edit') {
				this.edit = false
				this.loadFields()
			} else {
				this.edit = true
				this.resetInputs()
			}
		}
	},
	created () {
		this.verifRoute()
	},
	watch: {
		'$route.path' () {
			this.verifRoute()
		}
	}
}
</script>

<style scoped>
	section {
		background-image: url('../../assets/login-fundo.jpg');
		background-attachment: fixed;
		background-position: center;
	}

	.btn-padding {
		margin-left: 1rem;
	}
</style>
