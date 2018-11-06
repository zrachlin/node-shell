var request = require('request');

module.exports = function(url) {
  request(url, (err, resp, body) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    }
  });
};
