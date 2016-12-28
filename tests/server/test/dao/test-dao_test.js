const mongoose = require('mongoose');
const testDAO = require(process.cwd() + '/server/api/test/dao/test-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('testDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    testDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
