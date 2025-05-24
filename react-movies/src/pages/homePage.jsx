import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";


const HomePage = (props) => {

  const [page, setPage] = useState(1);
 

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['discover', page],
    queryFn: () => getMovies(page),
    keepPreviousData: true,
  });
  
  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;
  
  const movies = data.results;
  const totalPages = data.total_pages;
  

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
   <>
    <PageTemplate
      title={`Discover Movies`}
      movies={movies}
      action={(movie) =><AddToFavoritesIcon movie={movie} />}
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

export default HomePage;
