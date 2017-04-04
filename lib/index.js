'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _typedImmutable = require('typed-immutable');

function aTestFunction() {
  var aFakeObject = {
    'immutable': new _immutable.Record(),
    'typed-immutable': new _typedImmutable.Record()
  };
  return aFakeObject;
}

exports.default = aTestFunction;