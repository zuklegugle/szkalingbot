const Command = require('./../classes/command.js');
const szkalowania = require("./../szkalowania.js")

var chooseRandomSzkaling = function() {
  let num = Math.floor(Math.random() * szkalowania.length)
  return szkalowania[num];
}

var szkalowanie = function(msg, arg) {
  let mention = msg.mentions.members.first()
  if (arg.length === 1) {
    console.log(arg[0]);
    return `${arg[0]} ` + chooseRandomSzkaling();
  } else {
    if (!mention) {
      let users = msg.client.users.filter( usr => usr.bot !== true);
      let randomUser = users.random();
      return `${randomUser} ` + chooseRandomSzkaling();
    } else {
      return `${mention} ` + chooseRandomSzkaling();
    }
  }
}

module.exports = new Command('szkaluj', (msg, args) => {
  return msg.channel.send(szkalowanie(msg,args));
});
