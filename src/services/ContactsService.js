import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpCliente = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpCliente.get(`/contacts?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
