const mongoose = require('mongoose');
const { config } = require('./config');

const dbConnection = async () => {
  try {
    await mongoose.connect(config.connectionString);
    console.log('DB online');
  } catch (error) {
    console.error(error);
    throw new Error('Error trying to connect to the database');
  }
}

module.exports = {
  dbConnection
}