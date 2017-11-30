'use strict';

const reader = module.exports = {};
const fs = require('fs');

const dataArray = [];

reader.readText = (paths, callback) => {
  fs.readFile(paths[0], (error, data) => {
    if(error) callback(error);
    dataArray.push(data.toString());
    fs.readFile(paths[1], (error, data) => {
      if(error) callback(error);
      dataArray.push(data.toString());
      fs.readFile(paths[2], (error, data) => {
        if(error) callback(error);
        dataArray.push(data.toString());
        callback(null, dataArray);
      });
    });
  });
};
