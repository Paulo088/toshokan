import { HttpService } from './HttpService'
import axios from 'axios'

class UsersService extends HttpService {
	constructor () {
		super('users')
	}

	login (username, password) {
		let user = {}
		user.username = username
		user.password = password
		let res = axios.post(super.url + '/login', user)
		return res
	}
}

export const users = new UsersService()
