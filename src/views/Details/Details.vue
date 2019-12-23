<template>
<div id="detail" class="margin-menu">
	<div class="columns">
		<div class="column"></div>
		<div class="column">
			<img :src="getImgUrl(book.img)">
			<h3>{{book.name}}</h3>
		</div>
		<div class="column"></div>
	</div>
</div>
</template>

<script>
export default {
	name: 'detail',
	components: {},
  data () {
    return {
			book: {}
		}
	},
	methods: {
		getImgUrl (book) {
			var images = require.context('../../assets/livros', false, /\.jpg$/)
			return images('./' + book)
		}
	},
	created () {
		this.book.name = this.$route.params.name
		this.book.img = this.$route.params.img
	}
}
</script>

<style scoped>
	#detail {
		background-color: black;
		color: #ffffff;
		padding: 3rem 3rem 3rem 3rem;
	}

	.text-color {
		color: #ffffff;
	}

	.margin-menu {
		padding-left: 5rem;
	}
</style>
