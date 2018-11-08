import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import TMDB_API_KEY from '../config/keys';

class Movies extends PureComponent {
  state = {
    movies: []
  };

  async componentDidMount() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    try {
      const res = await fetch(url);
      const movies = await res.json();
      this.setState(() => ({
        movies: movies.results
      }));
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default Movies;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
`;
