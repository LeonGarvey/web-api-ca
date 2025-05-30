// other imports
import cors from 'cors';
import './db';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';   
import usersRouter from './api/users';
import authenticate from './authenticate';



dotenv.config();

const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
  };

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
// Enable CORS for all requests
app.use(cors());
// Public routes (no auth)
app.use('/api/movies', moviesRouter);

// Protected routes (auth required)
app.use(authenticate);
app.use('/api/users', usersRouter);

app.use(errHandler);





app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
