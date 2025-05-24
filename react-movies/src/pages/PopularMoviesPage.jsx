import React, { useState } from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PopularMoviesPage = () => {
    const [page, setPage] = useState(1);



  const { data, error, isPending, isError } = useQuery({
    queryKey: ["popular", page],
    queryFn: () => getPopularMovies(page),
    keepPreviousData: true,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;
  const totalPages = data.total_pages;
  const addToFavorites = () => true;

  return (
    <>
      <PageTemplate
        title={`Popular Movies`}
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
        showFilter={false}
      />
      <Stack spacing={2} alignItems="center" sx={{ my: 3 }}>
        <Pagination
          count={Math.min(totalPages, 500)} 
          page={page}
          onChange={(e, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",              
              borderColor: "white",        
            },
            "& .Mui-selected": {
              backgroundColor: "white",    // Selected item background
              color: "#0d47a1",           
            },
          }}
        />
      </Stack>
    </>
  );
};

export default PopularMoviesPage;
