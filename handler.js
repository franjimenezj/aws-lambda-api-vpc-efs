'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello world! / ¡Hola Mundo!'
    }),
  };
  
  return callback(null, response);

};
