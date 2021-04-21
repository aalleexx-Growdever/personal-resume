/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ApiServices {
  async saveContact(contact) {
    const response = await axios.post('url', { contact });
  }
}

export default new ApiServices();
