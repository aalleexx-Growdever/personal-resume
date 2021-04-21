/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ApiServices {
  async saveContact(contact) {
    const url = 'https://personal-resume-database.herokuapp.com/contacts';
    try {
      const response = await axios.post(`${url}`, { contact });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async saveFeedback(feedback) {
    const url = 'https://personal-resume-database.herokuapp.com/feedbacks';
    try {
      const response = await axios.post(`${url}`, { feedback });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ApiServices();
