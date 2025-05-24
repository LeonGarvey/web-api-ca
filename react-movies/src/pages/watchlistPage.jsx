import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import RemoveFromWatchlistIcon from "../components/cardIcons/removeFromWatchlist";

const WatchlistPage = () => {
    const { watchlist } = useContext(MoviesContext);
  
    if (watchlist.length === 0) {
      return (
        <div style={{ padding: "2rem", color: "white", fontFamily: "Arial, Helvetica, sans-serif", }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem",  fontWeight: "500", }}>My Watchlist is empty </h1>
          
        </div>
      );
    }

    return (
        <PageTemplate
          title="My Watchlist"
          movies={watchlist}
          action={(movie) => <RemoveFromWatchlistIcon movie={movie} />}
        />
      );
    };
    
    export default WatchlistPage;