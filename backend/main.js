const configExpress = require('./src/config/express');
const app = configExpress();

app.listen(5000, ()=>console.log('RUNNING ON PORT 500'));

module.exports = app;
