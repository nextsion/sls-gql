'use strict';

module.exports.graphql = async (event, context, callback) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  }, null, 2),
});

module.exports.rejectedPromise = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  Promise.reject(new Error('This is the rejected error'));
  callback(null, response);
};

module.exports.authHandler = (event, context, callback) => {
  context.succeed({
    principalId: 'xxxxxxx', // the principal user identification associated with the token send by the client
    policyDocument: {
      // example policy shown below, but this value is any valid policy
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Action: ['execute-api:Invoke'],
          Resource: [event.methodArn],
        },
      ],
    },
  });
};

module.exports.helloLambdaIntegration = (event, context, callback) => {
  callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};