'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  console.log(':::::HITTING PUT LAMBDA:::::', event);
  const id = event.pathParameters.id;
  const { name, age } = JSON.parse(event.body);
  console.log(':::::HITTING PUT LAMBDA:::::__ID__:', id, name, age);

  try {
    let data = await peopleModel.update({ id, name, age });
    console.log(':::::DATA UPDATE::::::', data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
};