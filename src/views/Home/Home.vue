<template>
<div id="home" class="margin-menu">
	<h3 class="title is-3 text-color">Mais Vendidos</h3>
	<vueper-slides class="no-shadow" :visible-slides="6" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
		<vueper-slide :link="details(book)" v-for="book in bestSeller" :key="book.name" :image="getImgUrl(book.img)" style="margin-left: 0.2rem;">
		</vueper-slide>
	</vueper-slides>

	<h3 class="title is-3 text-color">Mais Lidos</h3>
	<vueper-slides class="no-shadow" :visible-slides="7" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
		<vueper-slide v-for="book in mostRead" :key="book.name" :image="getImgUrl(book.img)" style="margin-left: 0.2rem;">
		</vueper-slide>
	</vueper-slides>

	<h3 class="title is-3 text-color">Todos os livros</h3>
	<vueper-slides class="no-shadow" :visible-slides="8" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
		<vueper-slide v-for="book in allBooks" :key="book.name" :image="getImgUrl(book.img)" style="margin-left: 0.2rem;">
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
      allBooks: [
				{
					name: 'O Que Aconteceu Com Annie',
					img: 'annie.jpg'
				},
				{
					name: 'Alice no Pais das Maravilhas',
					img: 'apm.jpg'
				},
				{
					name: 'Corte de Espinhos e Rosas',
					img: 'cer.jpg'
				},
				{
					name: 'Doutro Sono',
					img: 'docsono.jpg'
				},
				{
					name: 'Êxtase',
					img: 'fallen.jpg'
				},
				{
					name: 'Paixão',
					img: 'fallen2.jpg'
				},
				{
					name: 'A Guerra Que Salvou A Minha Vida',
					img: 'gsmv.jpg'
				},
				{
					name: 'Harry Potter E A Câmara Secreta',
					img: 'hp2.jpg'
				},
				{
					name: 'Harry Potter E O Prisioneiro de Azkaban',
					img: 'hp3.jpg'
				},
				{
					name: 'Harry Potter E As Reliquias da Morte',
					img: 'hp7.jpg'
				},
				{
					name: 'IT: A Coisa',
					img: 'it.jpg'
				},
				{
					name: 'Príncipe Dracula',
					img: 'pd.jpg'
				},
				{
					name: 'The Kiss Of Deception',
					img: 'tkd.jpg'
				},
				{
					name: 'Trono de Vidro',
					img: 'tv.jpg'
				}
			],
			mostRead: [
				{
					name: 'Alice no Pais das Maravilhas',
					img: 'apm.jpg'
				},
				{
					name: 'Êxtase',
					img: 'fallen.jpg'
				},
				{
					name: 'Paixão',
					img: 'fallen2.jpg'
				},
				{
					name: 'IT: A Coisa',
					img: 'it.jpg'
				},
				{
					name: 'Príncipe Dracula',
					img: 'pd.jpg'
				},
				{
					name: 'The Kiss Of Deception',
					img: 'tkd.jpg'
				}
			],
			bestSeller: [
				{
					name: 'O Que Aconteceu Com Annie',
					img: 'annie.jpg'
				},
				{
					name: 'Corte de Espinhos e Rosas',
					img: 'cer.jpg'
				},
				{
					name: 'Doutro Sono',
					img: 'docsono.jpg'
				},
				{
					name: 'A Guerra Que Salvou A Minha Vida',
					img: 'gsmv.jpg'
				},
				{
					name: 'Harry Potter E A Câmara Secreta',
					img: 'hp2.jpg'
				},
				{
					name: 'Harry Potter E O Prisioneiro de Azkaban',
					img: 'hp3.jpg'
				},
				{
					name: 'Harry Potter E As Reliquias da Morte',
					img: 'hp7.jpg'
				},
				{
					name: 'Trono de Vidro',
					img: 'tv.jpg'
				}
      ]
    }
	},
	methods: {
		getImgUrl (book) {
			var images = require.context('../../assets/livros', false, /\.jpg$/)
			return images('./' + book)
		},
		details (book) {
			return `/#/details/${book.name}/${book.img}`
		}
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
		padding-left: 5rem;
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
