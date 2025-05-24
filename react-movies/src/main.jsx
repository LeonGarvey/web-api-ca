import AddMovieReviewPage from './pages/addMovieReviewPage'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SiteHeader from './components/siteHeader';
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import WatchlistPage from "./pages/watchlistPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopRatedPage from "./pages/TopRatedPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import {getTasks, addTask, deleteTask, updateTask} from "./api/tasky-api";




document.body.style.margin = "0"; // keeps thing below site header attached to sides
document.body.style.padding = "0";
document.body.style.backgroundColor = "#0d47a1"; //changes background color of all pages

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/upcoming" element={<UpcomingMoviesPage />} /> 
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/now_playing" element={<NowPlayingPage />} />
            <Route path="/popular" element={<PopularMoviesPage />} />
            <Route path="/top_rated" element={<TopRatedPage />} />
            <Route path="/movie/:id/recommendations" element={<RecommendationsPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
