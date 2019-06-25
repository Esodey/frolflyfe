const mongoose = require('mongoose');

var frolfRound = mongoose.Schema({
    player: String,
    course: String,
    score: Array,
    date: { type: Date, default: Date.now }
  });
  
const Round = mongoose.model('Round', frolfRound);

module.exports = Round;