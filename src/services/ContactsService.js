import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    this.httpCliente = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy, signal) {
    const contacts = await this.httpCliente.get(`/contacts?orderBy=${orderBy || 'asc'}`, { signal });

    //return contacts.map((contact) => ContactMapper.toDomain(contact))
    //short sintax
    return contacts.map(ContactMapper.toDomain);
  }

  async getContactById(id, signal) {
    const contact = await this.httpCliente.get(`/contacts/${id}`, { signal });

    return ContactMapper.toDomain(contact);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpCliente.post('/contacts', { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpCliente.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpCliente.delete(`/contacts/${id}`);
  }

}

export default new ContactsService();
