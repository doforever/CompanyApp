const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {
  after(() => {
    mongoose.models = {};
  });

  
});