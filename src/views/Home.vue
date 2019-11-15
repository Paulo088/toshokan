<template>
<div id="home" class="margin-menu">
	<h3 class="title is-3 text-color">Mais Vendidos</h3>
	<div class="columns">
		<div v-for="book in bestSeller" :key="book" class="column">
			<img :src="getImgUrl(book.img)"/>
			{{ book.name }}
		</div>
	</div>
	<h3 class="title is-3 text-color">Mais Lidos</h3>
	<div class="columns">
		<div v-for="book in mostRead" :key="book" class="column">
			<img :src="getImgUrl(book.img)"/>
			{{ book.name }}
		</div>
	</div>
	<h3 class="title is-3 text-color">Todos os livros</h3>
	<div class="columns">
		<div v-for="book in allBooks" :key="book" class="column">
			<img :src="getImgUrl(book.img)"/>
			{{ book.name }}
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'home',
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
			var images = require.context('../assets/livros', false, /\.jpg$/)
			return images('./' + book)
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
</style>
