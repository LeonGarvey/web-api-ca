import React from "react";
import { useLocation } from "react-router";
import PageTemplate from "../components/templateMoviePage";
import { useQuery } from '@tanstack/react-query';
import MovieReview from "../components/movieReview";


const MovieReviewPage = (props) => {
  let location = useLocation();
  const { movie, review } = location.state;
  
  return (
    <div className="review-page-container">
      <PageTemplate movie={movie}>
        <MovieReview review={review} />
      </PageTemplate>
    </div>
  );
};


export default MovieReviewPage;
