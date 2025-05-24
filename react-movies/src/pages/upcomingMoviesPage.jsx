
import React, { useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const UpcomingMoviesPage = () => {
  const [page, setPage] = useState(1);
 
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["upcoming", page],
    queryFn: () => getUpcomingMovies(page),
    keepPreviousData: true,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;
  const totalPages = data.total_pages;

  return (
    <>
    <PageTemplate
      title={`Upcoming movies`}
      movies={movies}
      action={(movie) => <AddToWatchlistIcon movie={movie} />}
      
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

export default UpcomingMoviesPage;
