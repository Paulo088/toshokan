<template>
<div id="detail" class="margin-menu">
	<div class="columns">
		<div class="column">
			<img class="img" :src="getImgUrl(book.img)">
			<h3>{{ book.name }}</h3>
		</div>
		<div class="column is-three-fifths">
			<h5>Sinopse: {{ book.sinopse }}</h5>
			<br>
			<h5>R$ {{ book.price }}</h5>
			<br>
			<button class="button">
				Comprar
			</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'detail',
	components: {},
  data () {
    return {
			book: {
				img: 'semcapa.jpg'
			}
		}
	},
	methods: {
		async getBook () {
			let res = await this.$services.books.get(this.$route.params.id)
			this.book = res.data
		},
		getImgUrl (book) {
			var images = require.context('@/assets/livros', false, /\.jpg$/)
			return images('./' + book)
		}
	},
	created () {
		this.getBook()
	}
}
</script>

<style scoped>
	#detail {
		background-color: black;
		color: #ffffff;
		padding: 4rem 4rem 4rem 4rem;
	}

	.img {
		width: 330px;
	}

	.text-color {
		color: #ffffff;
	}

	.margin-menu {
		padding-left: 5rem;
	}
</style>
