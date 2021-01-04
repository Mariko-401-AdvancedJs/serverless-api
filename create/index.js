'use strict';

const uuid = require('uuid').v4;
const PeopleModel = require('./people.schema');

exports.handler = async (event) => {
  console.log(':::::HITTING POST LAMBDA:::::', event.body);
  const { name, age } = JSON.parse(event.body);
  const id = uuid();
  try {
    const record = new PeopleModel({ id, name, age });
    const data = await record.save();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
};