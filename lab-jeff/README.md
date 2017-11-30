# Code 401 lab 3

## Purpose
The purpose of this lab is to learn asynchronous function calls using Test Driven Development (TDD) when writing code.  We are using jest.js to test our code.

## File Structure
There is one test file in the __test__ folder which test the functions included in the reader module in the lib folder.  There are also three text files in the assets folder.

## reader module
The reader module contains one function, reader.readText.  

### reader.readText
reader.readText expects 2 arguments: an array of three filepaths to text files and a callback function. If three valid filepaths are passed in an array, it returns an array of strings of the contents of the three text files.  If the filepaths are not valid, it returns an error object.
