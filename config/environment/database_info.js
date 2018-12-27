const mongoose = require('mongoose');
require('dotenv').config();

let mongoDB = process.env.MONGODB_URI;


mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connect to mongodb cloud successfully');
});
