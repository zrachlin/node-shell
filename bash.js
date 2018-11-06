const pwdFunc = require('./pwd');
const lsFunc = require('./ls');
const catFunc = require('./cat');
const curlFunc = require('./curl');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwdFunc();
    // process.stdout.write('Current directory: ' + process.cwd());
  } else if (cmd === 'ls') {
    lsFunc();
  } else if (cmd.split(' ')[0] === 'cat') {
    catFunc(cmd.split(' ')[1]);
  } else if (cmd.split(' ')[0] === 'curl') {
    curlFunc(cmd.split(' ')[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
