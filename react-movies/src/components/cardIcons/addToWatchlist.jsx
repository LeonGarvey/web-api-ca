// src/components/cardIcons/addToWatchlist.jsx
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
  const { addToWatchlist } = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    addToWatchlist(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon sx={{ color: "white" }} fontSize="medium" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;
