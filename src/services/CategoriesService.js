import HttpClient from './utils/HttpClient';
import CategoryMapper from './mappers/CategoryMapper';

class CategoriesService {
  constructor() {
    this.httpCliente = new HttpClient('http://localhost:3001');
  }

  async listCategories(signal) {
    const categories = await this.httpCliente.get('/categories', { signal });

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
