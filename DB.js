const { Pool } = require("pg");


//  GET data from .env  about database
require("dotenv").config();

const pool =new Pool(  
    {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        port: Number(process.env.DB_PORT),
        password:process.env.DB_PASSWORD,
    }
)

module.exports = pool ;


require("dotenv").config();

