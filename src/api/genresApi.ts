import { genres, ListResponse, ListParams, Movie } from 'models';
import axiosClient from './axiosClient';

const genresApi = {
  getAll(): Promise<ListResponse<genres>> {
    const url = '/genres';
    return axiosClient.get(url);

  },

  retrievegetMoviesByGenre(genres: string): Promise<Movie> {
    const url = `/movie/byGen/${genres}`
    return axiosClient.get(url)
  },
  listgetCastByMovieIds(movie: string): Promise<Movie> {
    // 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0110366/cast/',
    const url = `/movie/id/${movie}/cast`
    return axiosClient.get(url)
  }
};

export default genresApi;