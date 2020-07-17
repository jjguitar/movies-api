const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler')

const notFoundHandler = require('./utils/middleware/notFoundHandler')

app.use(express.json());

moviesAPI(app);
// Catch 404
app.use(notFoundHandler);

// //Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`); // eslint-disable-line
});