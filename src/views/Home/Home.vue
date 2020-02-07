<template>
<div id="home" class="margin-menu">
	<h2 class="title is-2 text-color">Toshokan</h2>
	<h3 class="title is-3 text-color">Mais Vendidos</h3>
	<vueper-slides class="no-shadow" :visible-slides="6" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
		<vueper-slide :link="details(book)" v-for="book in bestSeller" :key="book.name" :image="getImgUrl(book.img)" style="margin-left: 0.2rem;">
		</vueper-slide>
	</vueper-slides>

	<h3 class="title is-3 text-color">Mais Lidos</h3>
	<vueper-slides class="no-shadow" :visible-slides="6" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
		<vueper-slide :link="details(book)" v-for="book in mostRead" :key="book.name" :image="getImgUrl(book.img)" style="margin-left: 0.2rem;">
		</vueper-slide>
	</vueper-slides>

	<h3 class="title is-3 text-color">Todos os livros</h3>
	<vueper-slides class="no-shadow" :visible-slides="6" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
		<vueper-slide :link="details(book)" v-for="book in allBooks" :key="book.name" :image="getImgUrl(book.img)" style="margin-left: 0.2rem;">
		</vueper-slide>
	</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
	name: 'home',
	components: { VueperSlides, VueperSlide },
  data () {
    return {
			allBooks: [],
			bestSeller: [],
			mostRead: []
		}
	},
	methods: {
		async loadBooks () {
			let res = await this.$services.books.getAll()
			this.allBooks = res.data
			for (let book of this.allBooks) {
				if (book.category === 'mostRead') {
					this.mostRead.push(book)
				} else if (book.category === 'bestSeller') {
					this.bestSeller.push(book)
				}
			}
		},
		getImgUrl (book) {
			var images = require.context('../../assets/livros', false, /\.jpg$/)
			return images('./' + book)
		},
		details (book) {
			return `/#/details/${book.id}`
		}
	},
	created () {
		this.loadBooks()
	}
}
</script>

<style scoped>
	#home {
		background-color: black;
		color: #ffffff;
	}

	.text-color {
		color: #ffffff;
	}

	.margin-menu {
		padding: 0rem 3rem 0rem 5rem;
	}

	/* .container-img-best-seller {
		height: 15rem;
	}

	.container-img-most-read {
		height: 20rem;
	}

	.container-img-all-books {
		height: 15rem;
	} */
</style>
