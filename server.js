const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:3001'
};

const db = require('./connectors/MongoConnector');
require('dotenv').config();
const { PORT } = require('./config/config');
app.use(json());

db.then(()=>console.log('Database Connected')).catch(()=>console.log('no es posible conectarse a mongodb'));

app.use(cors(corsOptions));
app.use(require('./routes'));

app.listen(PORT,()=>{console.log(`bienvenido ruben ${PORT}`)});