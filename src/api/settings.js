import axios from 'axios';
import { isEmpty } from 'lodash';

const API_URL = 'https://svakil-dev-webapi-mock.azurewebsites.net/v1';

export const getJSON = async (route, body = {}) => {
  try {
    const response = await axios.get(`${API_URL}${route}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const postJSON = async (route, body = {}) => {
  try {
    if (isEmpty(body)) {
      const response = await axios.post(`${API_URL}${route}`);
      return response.data;
    } else {
      const response = await axios.post(`${API_URL}${route}`, body);
      return response.data;
    }
  } catch (err) {
    return err;
  }
}
