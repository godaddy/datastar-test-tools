'use strict';

var proxyquire = require('proxyquire');

//
// Exports our prototypal mocks.
//
exports.Priam = require('./priam');

/*
 * function datastar ()
 * Returns a new mock Datastar prototype
 */
exports.datastar = function () {
  return proxyquire('datastar', {
    priam: exports.Priam
  });
};
