<template>
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6-tablet is-5-desktop is-5-widescreen">
          <form class="box">
						<div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input v-model="book.name" type="text" placeholder="e.g. O segredo do Pato Donald" class="input" required>
								<span class="icon is-small is-left">
                  <i class="fa fa-book"></i>
                </span>
              </div>
							<label class="label">Cover</label>
              <div class="control has-icons-left">
                <input v-model="book.img" type="text" placeholder="e.g. donald.jpg" class="input" required>
								<span class="icon is-small is-left">
                  <i class="fa fa-image"></i>
                </span>
              </div>
							<label class="label">Sinopse</label>
              <div class="control has-icons-left">
                <input v-model="book.sinopse" type="text" placeholder="e.g. Pato Donald tem um segredo..." class="input" required>
								<span class="icon is-small is-left">
                  <i class="fa fa-align-left"></i>
                </span>
              </div>
            </div>
            <div class="field">
							<button @click="save()" class="button is-primary">
                {{btnSave}}
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
			book: {
				name: '',
				img: '',
				category: '',
				sinopse: ''
			},
			btnSave: 'Cadastrar',
			edit: false
		}
	},
	methods: {
		async save () {
			if (this.btnSave === 'Cadastrar') {
				this.$services.book.post(this.book).then(data => {
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
		},
		resetInputs () {
			this.book.name = ''
			this.book.img = ''
			this.book.sinopse = ''
			this.btnSave = 'Cadastrar'
		},
		loadFields () {
			this.btnSave = 'Salvar'
		},
		login () {
			this.$router.push({ name: 'login' })
		},
		verifRoute () {
			if (this.$route.name === 'bookEdit') {
				this.edit = true
				this.loadFields()
			} else {
				this.edit = false
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
		background-image: url('../../../assets/login-fundo.jpg');
		background-attachment: fixed;
		background-position: center;
	}

	.btn-padding {
		margin-left: 1rem;
	}
</style>
