const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');

const { logError, errorHandler } = require('./utils/middleware/errorHandler')

app.use(express.json());

moviesAPI(app);

app.use(logError);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});