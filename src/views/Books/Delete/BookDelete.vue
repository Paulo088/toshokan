<template>
	<div id="bookDelete">
		<div class="columns">
			<div class="column">
				<table class="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>Título</th>
							<th>Categoría</th>
							<th>Preço</th>
							<th>Opções</th>
						</tr>
					</thead>
					<tbody v-if="connect">
						<tr v-for="book in books" :key="book.id">
							<td>{{ book.name }}</td>
							<td>{{ book.category }}</td>
							<td>R$ {{ book.price }}</td>
							<td>
								<button @click="detailBook(book.id)" class="button is-primary">Detalhes</button>
								<button @click="deleteBook(book.id)" class="button is-danger">Excluir</button>
							</td>
						</tr>
						<tr>
							<button @click="register()" class="button is-primary button-add">Adicionar novo livro</button>
						</tr>
					</tbody>
					<tbody v-else>
						<tr>
							Não há livros.
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'bookDelete',
	data () {
		return {
			connect: false,
			books: []
		}
	},
	created () {
		this.$services.books.getAll().then(data => {
			this.books = data.data
			this.connect = true
		}).catch(err => {
			console.error(err)
			this.$alert('Erro ao tentar acessar o servidor!')
		})
	},
	methods: {
		async deleteBook (id) {
			this.$services.books.delete(id).then(data => {
				this.removeBook(id)
				console.log(data)
			}).catch(err => {
				console.error(err)
				this.$alert('Erro ao excluir livro!')
			})
		},
		async detailBook (id) {
			this.$router.push({ name: 'bookDetails', params: { id: id } })
		},
		removeBook (id) {
			for (let i in this.books) {
				if (this.books[i].id === id) {
					this.books.splice(i)
				}
			}
		},
		register () {
			this.$router.push({ name: 'bookEdit' })
		}
	}
}
</script>

<style scoped>
	#bookDelete {
		background-color: black;
		color: white;
		padding: 2% 5% 2% 5%;
	}

	.table {
		font-size: 1.2rem;
	}

	.button-add {
		margin: 2% 0 2% 5%;
	}

	.button {
		margin-left: 0.2rem;
	}
</style>
