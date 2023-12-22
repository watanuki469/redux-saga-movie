import { ListParams, ListResponse, Movie, genres, movieItem,singleMovie } from 'models';
import axiosClient from './axiosClient';

const genresApi = {
  getAll(params: ListParams): Promise<ListResponse<genres>> {
    const url = '/genres';
    return axiosClient.get(url, { params });

  },

  retrievegetMoviesByGenre(genres: any): Promise<Movie> {
    const url = `/movie/byGen/${genres}`
    return axiosClient.get(url);
  },

  retrievegetMovieByImdbId(movie: any): Promise<movieItem> {
    const url = `/movie/id/${movie}`
    return axiosClient.get(url)
  },
  retrievegetMovieByImdbId2(movie: any): Promise<singleMovie> {
    const url = `/movie/id/${movie}`
    return axiosClient.get(url)
  }
};

export default genresApi;