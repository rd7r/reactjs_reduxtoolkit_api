const express = require('express');
const app = express();

app.get('/users',async(req,res) => {
    try {
        return await res.status(200).json({message: 'estas en router users'});
    } catch (e) {
        res.json({
            message: e.message
        });
    }
});

module.exports = app;