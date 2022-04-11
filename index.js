const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const accountRoute = require('./accounts');
app.use('/accounts', accountRoute);


const port = 3001;
app.listen(port, function(){
    console.log(`The server is running via port ${port}`);
});
