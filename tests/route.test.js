'use strict';

const req = require('superagent');

//:::::::::From Strasner and Simon:::::::::::

let CREATE = 'https://8p37b91hz6.execute-api.us-west-2.amazonaws.com/people';

describe('Lambda POST route', () => {
  it('should successfully invoke Lambda POST function', async () => {
    const res = await req.post(CREATE).send({ name: 'Ricardo', age: 15 });
    expect(res).toHaveProperty('status', 200);
    expect(typeof res.body).toEqual('object');
  });
});

let READ = 'https://8p37b91hz6.execute-api.us-west-2.amazonaws.com/people/';

describe('Lambda GET route', () => {
  it('should successfully invoke Lambda GET function', async () => {
    const res = await req.get(READ);
    expect(res).toHaveProperty('status', 200);
    expect(typeof res.body).toEqual('object');
  });
});

let id = '4d5bced9-43be-4ab9-9cbd-60aca9446ed1';
let UPDATE = `https://8p37b91hz6.execute-api.us-west-2.amazonaws.com/people/${id}`;;

describe('Lambda PUT route', () => {
  it('should successfully invoke Lambda PUT function', async () => {
    const res = await req.put(UPDATE).send({ name: 'Tester', age: 100 });
    expect(res).toHaveProperty('status', 200);
    expect(typeof res.body).toEqual('object');
  });
});

let idDelete = '57df88b9-ac5d-403b-84a4-883ced912145';
let DELETE = `https://8p37b91hz6.execute-api.us-west-2.amazonaws.com/people/${idDelete}`;

describe('Lambda PUT route', () => {
  it('should successfully invoke Lambda DELETE function', async () => {
    const res = await req.delete(DELETE);
    expect(res).toHaveProperty('status', 200);
    expect(typeof res.body).toEqual('object');
  });
});