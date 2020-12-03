const url = process.argv[2];
const filePath = process.argv[3];

const fs = require('fs');

// directory to check if exists
const dir = './uploads';

// check if directory exists
fs.access(dir, (err) => {
  // if (err) {
  //   console.log('Error: Directory does not exist');
  // }
  console.log(`${err ? 'Error: Directory does not exist' : 'Directory exists'}`);
});