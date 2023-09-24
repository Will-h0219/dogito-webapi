require('dotenv').config();

const config = {
  port: process.env.PORT || 4500,
  connectionString: process.env.CONNECTION_STRING,
  environment: process.env.NODE_ENV,
  productionDomain: process.env.PROD_DOMAIN
};

module.exports = { config };