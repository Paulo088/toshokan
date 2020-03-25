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
						</div>
						<div class="field">
							<label class="label">Cover</label>
              <div class="control has-icons-left">
								<input type="file" ref="fileInput" :multiple="true" @change="onFileSelected" class="input" placeholder="e.g. donald.jpg"/>
								<span class="icon is-small is-left">
                  <i class="fa fa-image"></i>
                </span>
              </div>
						</div>
						<div class="field">
							<label class="label">Price</label>
              <div class="control has-icons-left">
                <input v-model="book.price" type="text" placeholder="e.g. 10.50" class="input">
								<span class="icon is-small is-left">
                  <i class="fa fa-tag"></i>
                </span>
              </div>
						</div>
						<div class="field">
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
				price: 0,
				category: '',
				sinopse: ''
			},
			selectedFile: [],
			btnSave: 'Cadastrar',
			img: false,
			edit: false
		}
	},
	methods: {
		async save () {
			delete (this.book.category)
			if (this.btnSave === 'Cadastrar') {
				console.log(this.book)
				this.$services.books.post(this.book).then(data => {
					this.$alert('Cadastrado com sucesso!')
					this.resetInputs()
					// this.$router.push({ name: 'home' })
				}).catch(err => {
					this.$alert('Erro ao cadastrar!')
					console.error('register error:', err)
				})
			} else {
				this.$services.books.patch(this.$route.params.id, this.book).then(data => {
					this.$alert('Salvo com sucesso!')
					this.$router.push({ name: 'home' })
				}).catch(err => {
					this.$alert('Erro ao salvar!')
					console.error('save error:', err)
				})
			}
		},
		async onFileSelected (event) {
			if (!event)
				return
			if (!event.target && !event.dataTransfer)
				return
			if (event.target.files.length <= 0 && (!event.dataTransfer || event.dataTransfer.files.length <= 0))
				return
			try {
				this.selectedFile = event.target.files[0] || event.dataTransfer.files[0]
				let date = new Date().getTime()
				this.book.img = date + this.selectedFile.name
				this.book.img = this.book.img.replace(' ', '_')

				const formData = new FormData()
				formData.append('file', this.selectedFile, this.book.img)
				await this.$services.imgs.postImg(this.book.img, formData).then(data => {
					if (data.status === 201) {
						this.$alert('Imagem enviada!')
					}
				}).catch(err => {
					this.$alert('Erro ao enviar imagem!')
					console.error(err)
				})
			} catch (err) {
				this.$alert('Erro ao enviar imagem!')
				console.error(err)
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
			this.$router.push({ name: 'userLogin' })
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
