import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const RemoveFromWatchlistIcon = ({ movie }) => {
  const { removeFromWatchlist } = useContext(MoviesContext);

  const handleRemove = (e) => {
    e.preventDefault();
    removeFromWatchlist(movie);
  };

  return (
    <IconButton aria-label="remove from watchlist" onClick={handleRemove}>
      <DeleteIcon sx={{ color: "white" }} fontSize="medium" />
    </IconButton>
  );
};

export default RemoveFromWatchlistIcon;