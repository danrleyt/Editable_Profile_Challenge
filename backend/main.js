const configExpress = require('./src/config/express');
const db = require('./src/config/database');
const enviroment = require('dotenv').config();
const app = configExpress();

app.listen(process.env.PORT||5000, ()=>console.log('RUNNING ON PORT 5000'));
db(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}${process.env.DBURL}`);

if(process.env.ENVIRONMENT==="TEST"){
  module.exports = app;
}
