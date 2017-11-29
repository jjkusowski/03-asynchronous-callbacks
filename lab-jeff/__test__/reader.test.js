'use strict';

const reader = require('../lib/reader');

describe('reader.js', () => {
  describe('reader.readText', () => {
    test('function should return contents of three files in order they are listed in the array passed in if there are no errors', (done) => {
      reader.readText((error, data) => {
        expect(error).toBeNull();
        expect(data).toBeEqual(['The Michigan Tech Huskies are my favorite college team.', 'The Detroit Lions are my favorite NFL team.', 'The Seattle Sounders are my favorite soccer team.']);
        done();
      });
    });

  });
});
