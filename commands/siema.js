const Command = require('./../classes/command.js');

module.exports = new Command('siema', (msg, args) => {
  return msg.channel.send(`No siema ${msg.author}, ty jebany gnoju`);
});
