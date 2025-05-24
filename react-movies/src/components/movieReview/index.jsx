
import React from "react";
import Typography from "@mui/material/Typography";

const MovieReview =  ({ review }) => {
  return (
    <>
      <Typography variant="h5" component="h3" sx ={{ marginBottom: 2, color: "white"  }}>
        {review.title}
        Review By: {review.author}
      </Typography>

      <Typography variant="h6" component="p" sx ={{ marginBottom: 2, color: "white"  }}>
        {review.content} 
      </Typography>
    </>
  );
};
export default MovieReview
