
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import placeholderImage from "../../images/film-poster-placeholder.png";
import { useQuery } from "@tanstack/react-query";
import { getRecommendedMovies, getMovieCredits } from "../../api/tmdb-api";
import { useParams, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Spinner from "../spinner";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);  

  const { id } = useParams();

  const {
    data: recommendations,
    isPending: loadingRecs,
    isError: errorRecs,
  } = useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => getRecommendedMovies(id),
  });

  const {
    data: credits,
    isPending: loadingCredits,
    isError: errorCredits,
  } = useQuery({
    queryKey: ["credits", id],
    queryFn: () => getMovieCredits(id),
  });

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root, backgroundColor: "#1565c0" }}
      >
        <li>
          <Chip label="Genres" sx={{...chip, color: "white"}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip, color: "white"}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root, backgroundColor: "#1565c0"}}>
        <Chip 
        icon={<AccessTimeIcon sx={{ color: "white" }}  />}
         label={`${movie.runtime} min.`} 
         
         />
         
        <Chip
          icon={<MonetizationIcon sx={{ color: "white" }} />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate sx={{ color: "white" }}  />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root, backgroundColor: "#1565c0"}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip, color: "white"}} color="primary" />
        </li>
        {movie.production_countries.map((p) => (
          <li key={p.name}>
            <Chip label={p.name} sx={{...chip, color: "white"}} />
          </li>
        ))}
      </Paper>



 {/* CAST SECTION */}
 <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Cast
        </Typography>

        {loadingCredits ? (
          <Spinner />
        ) : errorCredits ? (
          <Typography variant="body1" color="error">
            Failed to load cast.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {credits?.cast?.slice(0, 8).map((actor) => (
              <Grid item xs={12} sm={6} md={3} key={actor.id}>
                <Card sx={{ backgroundColor: "#1565c0", color: "white"  }}>
                  <CardMedia
                    component="img"
                    height="400"
                    sx={{ objectFit: "cover" }}
                    image={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : placeholderImage
                    }
                    alt={actor.name}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" noWrap  sx={{ fontWeight: "bold" }}>
                      {actor.name}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      as {actor.character}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>








     {/* Recommended Movies Section below*/}
     <Box sx={{ mt: 25 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Recommended Movies
        </Typography>

        {loadingRecs ? (
          <Spinner />
        ) : errorRecs ? (
          <Typography variant="body1" color="error">
            Could not load recommendations.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {recommendations?.results?.map((rec) => (
              <Grid item xs={12} sm={6} md={2} key={rec.id}>
                <Card
                  sx={{
                    backgroundColor: "#1565c0",
                    color: "white",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    sx={{ objectFit: "cover" }}
                    image={
                      rec.poster_path
                      ?`https://image.tmdb.org/t/p/w500${rec.poster_path}`
                      : placeholderImage
                    }
                    alt={rec.title}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" noWrap>
                      {rec.title}
                    </Typography>
                    <Link to={`/movies/${rec.id}`}>
                      <Button
                        size="small"
                        variant="outlined"
                        sx={{ mt: 1, color: "white", borderColor: "white" }}
                      >
                        More Info
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>





      <Fab
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
         
          "&:hover": {
            backgroundColor: "#0056b3", // Darker blue on hover
          },
        }}
      >
        
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;