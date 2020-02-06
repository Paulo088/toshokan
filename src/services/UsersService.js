import { HttpService } from './HttpService'
import axios from 'axios'

class UsersService extends HttpService {
	constructor () {
		super('users')
	}

	login (username, password) {
		let res = axios.get(`${super.url}?username=${username}&passwrod=${password}`)
		return res
	}
}

export const users = new UsersService()
