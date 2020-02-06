import { HttpService } from './HttpService'

class BooksService extends HttpService {
	constructor () {
		super('books')
	}
}

export const books = new BooksService()
