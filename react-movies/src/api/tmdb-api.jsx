
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;
const tmdbBaseUrl = "https://api.themoviedb.org/3";

export const getMovies = (page = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

  
export const getMovie = (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getMovieReviews = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getUpcomingMovies = async (page = 1) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch upcoming movies: ${response.status}`);
    }
    return response.json();
  };
  

  export const getNowPlayingMovies = async (page = 1) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch upcoming movies: ${response.status}`);
    }
    return response.json();
  };
 
  
  export const getPopularMovies = async (page = 1) => {
     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&page=${page}` 
     );
     if (!response.ok) {
       throw new Error(`Failed to fetch upcoming movies: ${response.status}`);
     }
     return response.json();
   };
  
  
  export const getTopRatedMovies = async (page = 1) => {
     const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch upcoming movies: ${response.status}`);
    }
    return response.json();
  };
  
  
  export const getRecommendedMovies = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${import.meta.env.VITE_TMDB_KEY}`

    );
    if (!response.ok) {
      throw new Error("Failed to fetch recommended movies");
    }
  
    const data = await response.json();
  
   
    return data;
  };


  export const getMovieCredits = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie credits");
    }
    return await response.json();
  };