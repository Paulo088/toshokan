import { API_URL as url } from '@/config/'
import axios from 'axios'

export class HttpService {
	constructor (route) {
		this.route = route
	}

	get url () {
		return url + this.route
	}

	getAll () {
		let res = axios.get(this.url)
		return res
	}

	get (id) {
		let res = axios.get(this.url + '/' + id)
		return res
	}

	post (data) {
		let res = axios.post(this.url, data)
		return res
	}

	postImg (name, options) {
		console.log(this.url + '/' + name)
		let res = axios.post(this.url + '/' + name, options)
		return res
	}

	put (id, data) {
		let res = axios.put(this.url + '/' + id, data)
		return res
	}

	patch (id, data) {
		let res = axios.patch(this.url + '/' + id, data)
		return res
	}

	delete (id) {
		let res = axios.delete(this.url + '/' + id)
		return res
	}
}
