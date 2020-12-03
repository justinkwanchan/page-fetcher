// W02D3 - Page Downloader
// A small command line node app which should take a URL as a command-line argument
// as well as a local file path and download the resource to the specified path.

const url = process.argv[2];
const filePath = process.argv[3];
const directory = filePath.split('/').slice(0, -1).join('/');

const fs = require('fs');
const request = require('request');

// check if directory exists
fs.access(directory, (err) => {
  if (err) {
    console.log('Error: Directory does not exist');
  } else {
    // tcp access to server
    request(url, (error, response, body) => {
      if (error) {
        console.log('An error occured:', error); // Print the error if one occurred
      } else if (response.statusCode !== 200) {
        console.log('An error occured - code:', response && response.statusCode); // Print the response status code if a response was received
      } else {
        fs.writeFile(filePath, body, (err) => {
          if (err) throw err;
          
          // Confirmation message of success - TO COMPLETE
          fs.stat(filePath, (err, stats) => {
            console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
          });
        });
      }
    });
  }
});
