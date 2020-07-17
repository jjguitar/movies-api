const express = require('express');
const MoviesService = require('../services/movies');

function moviesAPI(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
        const movies = await moviesService.getMovies({ tags })
        throw new Error('Error getting movies')
        res.status(200).json({
          data: movies,
          message: 'movie retrieved'
        })
    } catch(err) {
      next(err)
    }
  })

  router.get('/:moviesId', async function(req, res, next) {
    const { moviesId } = req.params;
    try {
        const movies = await moviesService.getMovie({ moviesId })

        res.status(200).json({
          data: movies,
          message: 'movie find'
        })
    } catch(err) {
      next(err)
    }
  })

  router.post('/', async function(req, res, next) {
    const { body: movie } = req;
    try {
        const createdMovieId = await moviesService.createMovie({ movie })

        res.status(201).json({
          data: createdMovieId,
          message: 'movie created'
        })
    } catch(err) {
      next(err)
    }
  })

  router.put('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        })

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated'
        })
    } catch(err) {
      next(err)
    }
  })

  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId })

        res.status(200).json({
          data: deletedMovieId,
          message: 'movies deleted'
        })
    } catch(err) {
      next(err)
    }
  })
}

module.exports = moviesAPI;