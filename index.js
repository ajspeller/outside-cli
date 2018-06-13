const minimist = require('minimist');
const today = require('./cmds/today');
const help = require('./cmds/help');
const version = require('./cmds/version');
const forecast = require('./cmds/forecast');
const error = require('./utils/error');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let [cmd] = args._ || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'today':
      today(args);
      break;
    case 'version':
      version(args);
      break;
    case 'help':
      help(args);
      break;
    case 'forecast':
      forecast(args);
      break;
    default:
      error(`"${cmd}" is not a valid command!`, true);
  }
};