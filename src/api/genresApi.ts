import { genres, ListResponse, ListParams, Movie, movieItem } from 'models';
import axiosClient from './axiosClient';
import axios from 'axios';

const genresApi = {
  getAll(params: ListParams): Promise<ListResponse<genres>> {
    const url = '/genres';
    return axiosClient.get(url, { params });

  },

  retrievegetMoviesByGenre(genres: any): Promise<Movie> {
    const url = `/movie/byGen/${genres}/`
    return axiosClient.get(url);
  },

  retrievegetMovieByImdbId(movie: any): Promise<movieItem> {
    const url = `/movie/id/${movie}`
    return axiosClient.get(url)
  }
};

export default genresApi;