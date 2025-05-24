import React from "react";
import { useParams } from "react-router-dom";
import { getRecommendedMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const RecommendationsPage = () => {
  const { id } = useParams();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => getRecommendedMovies(id),
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;
  const addToFavorites = () => true;

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      showFilter={false}
    />
  );
};

export default RecommendationsPage;
