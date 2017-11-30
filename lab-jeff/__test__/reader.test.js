'use strict';

const reader = require('../lib/reader');

const paths = [`${__dirname}/../assets/huskies.txt`, `${__dirname}/../assets/lions.txt`, `${__dirname}/../assets/sounders.txt`];

const invalidPaths = [`${__dirname}/../huskies.txt`, `${__dirname}/../lions.txt`, `${__dirname}/../sounders.txt`];

describe('reader.js', () => {
  describe('reader.readText', () => {
    test('function should return contents of three files in order they are listed in the array passed in if there are no errors', (done) => {
      reader.readText(paths, (error, data) => {
        expect(error).toBeNull();
        expect(data).toEqual([`The Michigan Tech Huskies are my favorite college team.\n`, `The Detroit Lions are my favorite NFL team.\n`, `The Seattle Sounders are my favorite soccer team.\n`]);
        done();
      });
    });
    test('function should reject errors in the file paths', () => {
      reader.readText(invalidPaths, (error) => {
        expect(error).not.toBeNull();
      });
    });

  });
});
