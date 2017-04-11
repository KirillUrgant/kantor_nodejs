var User = require('./user'),
    db = require('db'),
    log = require('./logger.js')(module);

db.connect();

function run() {
    var vasya = new User('Vasya');
    var petya = new User('Petya');

    vasya.hello(petya);
    log(db.getPhrase('Run successfull'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}