import axios from 'axios';

const baseUrl = 'http://54.244.158.40:9500';

export class Api {

  static fetchCountries() {
    return axios.get(`${baseUrl}/countries`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

  static fetchMap() {
    return axios.get(`${baseUrl}/countries-map`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

  static fetchCurrencies() {
    return axios.get(`${baseUrl}/currencies`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

  static fetchJeeTree() {
    return axios.get(`${baseUrl}/jeetree`)
      .then((response) => {
        return response.data;
      })
      .catch(console.error);
  }

}
