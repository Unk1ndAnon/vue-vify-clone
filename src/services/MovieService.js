import axios from 'axios';
axios.defaults.baseURL = 'https://yts.mx/api/v2/'

export default {
  getMovies(searchParams = {}) {
    return axios.get('list_movies.json', { params: searchParams})
  }
}
