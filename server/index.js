const express = require('express');
const app = express();
const cors = require('cors');
const todoRouter = require('./routes/todoRoutes');

// middlware
app.use(cors());
app.use(express.json());

//ROUTES//
app.use('/todos', todoRouter);

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3737, () => console.log('Listening on port 3737!'));
