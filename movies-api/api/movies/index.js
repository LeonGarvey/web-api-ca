import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import movieModel from './movieModel.js';





const watchedMovies = {}; 
const router = express.Router();


// Get a user's tasks
router.get('/user/:uid', async (req, res) => {
    const tasks = await Task.find({ userId: `${req.params.uid}`});
    res.status(200).json(tasks);
});


router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));




// movie routes to be added

export default router;
