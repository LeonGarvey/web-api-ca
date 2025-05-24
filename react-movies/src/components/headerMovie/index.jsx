import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";


const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <Paper 
        component="div" 
        sx={{
          
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "1rem 2rem",
          backgroundColor: "#1565c0",
          color: "white",
          marginBottom: "1rem",  
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>

      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          overflow: "hidden",
        }}
      >


<Typography variant="h5" component="h3" noWrap>
          {movie.title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontStyle: "italic", fontSize: "1rem" }}
          noWrap
        >
          {movie.tagline && `"${movie.tagline}"`} 
        </Typography>
      </Box>

     
      <Box>
        {movie.homepage && (
          <a href={movie.homepage}>
            <IconButton>
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </a>
        )}

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
      </Box>
    </Paper>
  );
};

export default MovieHeader;
