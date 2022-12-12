import HttpClient from './utils/HttpClient';
import CategoryMapper from './mappers/CategoryMapper';

class CategoriesService {
  constructor() {
    this.httpCliente = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    const categories = await this.httpCliente.get('/categories');

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
