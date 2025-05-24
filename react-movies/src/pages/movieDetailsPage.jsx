import React from "react";
import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'

//import useMovie from "../hooks/useMovie";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isPending, isError  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovie,
  })

  if (movie) {
    console.log("✅ Full movie object:", movie);
    console.log("📝 Movie overview:", movie.overview);
  }

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <div className="movie-page-container"
    style={{
      color: "white",
      padding: "0", 
      margin: "0",
    }}
  >
    {movie ? (
      <PageTemplate movie={movie}>
        <MovieDetails movie={movie} />
      </PageTemplate>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </div>
);
};

export default MoviePage;
