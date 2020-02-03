<template>
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                <input v-model="username" type="text" placeholder="e.g. PatoDonald01" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input v-model="password" type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button @click="login()" class="button is-success">
                Login
              </button>
							<button @click="register()" type="button" class="button is-primary btn-padding">
                Cadastrar-se
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
	name: 'login',
	data () {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login () {
			if (this.username !== '' && this.password !== '') {
				this.axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`).then(data => {
					if (!data.data || data.data.length === 0) {
						this.$alert('Usuário ou senha incorreto!')
						return
					}
					this.$alert('Bem vindo ' + data.data[0].name + '!')
					console.log('user:', data.data[0])
					this.$router.push({ name: 'home' })
				}).catch(err => {
					this.$alert('Erro ao logar!')
					this.resetInputs()
					console.error('Login error:', err)
				})
			} else {
				this.$alert('Os campos devem ser preenchidos!')
			}
		},
		register () {
			this.$router.push({ name: 'register' })
		},
		resetInputs () {
			this.username = ''
			this.password = ''
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
