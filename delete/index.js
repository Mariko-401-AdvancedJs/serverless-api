'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  try {
    let data = await peopleModel.delete(id);
    console.log(`successfully delete record: ${id}`);
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