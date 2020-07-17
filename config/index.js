require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHostPrimary: process.env.DB_HOST_PRIMARY,
    dbHostSecond1: process.env.DB_HOST_SECOND_1,
    dbHostSecond2: process.env.DB_HOST_SECOND_2,
    dbName: process.env.DB_NAME
};

module.exports = { config };