const Round = require('../database-mongo/models.js');

const insertMany = (data, cb) => {
    console.table(Round);
    console.log(data);
    Round.insertMany(data, cb);
};

module.exports = insertMany;