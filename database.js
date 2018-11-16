const loki = require('lokijs');

AddCollection = function(db, collection) {
  let col = db.getCollection(collection);
  if (col == null){
    return db.addCollection(collection);
  } else {
    return col;
  }
}

module.exports = {
  db: new loki('database.json', {
    autosave: true,
    autosaveInterval: 5000,
    autoload: true
  }),
  collections: [],
  init: function() {
    AddCollection(this.db,'buleczki')
  }
}
