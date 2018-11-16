
class Command {
  constructor(cmd, callback) {
    this.cmd = '__test__';
    if (callback !== undefined) {
      this._execute = callback;
    } else {
      this._execute = (msg, args, db) => {
        return 'override this function RIGHT NOW!';
      }
    }
  };
  process(msg, args, db){
      this._execute(msg, args, db);
  }
}

module.exports = Command;
