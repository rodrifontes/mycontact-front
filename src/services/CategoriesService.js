import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpCliente = new HttpClient('http://localhost:3001');
  }

  listCategories() {
    return this.httpCliente.get('/categories');
  }
}

export default new CategoriesService();
