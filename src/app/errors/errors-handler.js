'use strict';

const {MongoError} = require(`mongodb`);

const ERROR_HANDLER = (err, req, res, _next) => {
  console.error(err);

  if (err instanceof MongoError) {
    res.status(400).json(err.message);

    return;
  }

  res.status(err.code || 500).send(err.message);
};

module.exports = ERROR_HANDLER;
