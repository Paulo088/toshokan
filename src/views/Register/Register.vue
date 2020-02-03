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
                Cadastrar-se
              </button>
							<button @click="login()" type="button" class="button is-success btn-padding">
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
			}
		}
	},
	methods: {
		save () {
			if (this.user.password === this.user.replyPassword) {
				delete (this.user.replyPassword)
				this.axios.post('http://localhost:3000/users', this.user).then(data => {
					this.$alert('Cadastrado com sucesso!')
					this.resetInputs()
				}).catch(err => {
					this.$alert('Erro ao cadastrar!')
					console.error('register error:', err)
				})
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
		},
		login () {
			this.$router.push({ name: 'login' })
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
