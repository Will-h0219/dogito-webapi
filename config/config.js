require('dotenv').config();

const config = {
  port: process.env.PORT || 4500,
  connectionString: process.env.CONNECTION_STRING
};

module.exports = { config };