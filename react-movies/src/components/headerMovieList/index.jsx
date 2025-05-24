import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";


const Header = (props ) => {
  const title = props.title

  const navigate = useNavigate();

  return (
    <Paper 
      component="div" 
      sx={{
        backgroundColor: "#1565c0",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "1rem 2rem",
        marginBottom: "1rem",
      }}
      >
           <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>


      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>

    </Paper>
  );
};

export default Header;
