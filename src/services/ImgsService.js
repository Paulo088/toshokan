import { HttpService } from './HttpService'

class ImgsService extends HttpService {
	constructor () {
		super('images')
	}
}

export const imgs = new ImgsService()
