const express = require('express');

const app = express();

app.get('/',(req,res)=>{
        return res.status(200).json({
            message: 'Running'
        });
});

app.use(require('./users'));
app.use(require('./heroe'));

module.exports = app;