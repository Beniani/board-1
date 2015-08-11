'use strict';

var _libJob = require('../lib/job');

console.log(module.filename);

(0, _libJob.create)({
    interval: 5,
    targets: ['world']
}, function (send) {
    var data = { carrot: 21, tomatoes: 51, status: 'down', carrots: 'yuck!' };

    send(data);
}, function (err) {
    console.log(err);
});

//# sourceMappingURL=world.js.map