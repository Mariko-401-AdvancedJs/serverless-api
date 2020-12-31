'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  console.log(':::::HITTING PUT LAMBDA:::::__ID__:', event);
  const id = event.pathParameters.id;
  console.log(':::::HITTING PUT LAMBDA:::::__ID__:', id);
  try {
    let data;
    if (id) {
      const list = await peopleModel.update({ 'id': id }, { 'name': event.body.name });
      data = list;
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e)
    }
  }
};