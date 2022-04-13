import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

import accountRoute from './accounts.js';
app.use('/accounts', accountRoute);

const port = 3001;
app.listen(port, function(){
    console.log(`The server is running via port ${port}`);
});
