const mongoose = require('mongoose');

let districtSchema = new mongoose.Schema({
  id: String,
  districtName: String
});

module.exports = mongoose.model('District', districtSchema);