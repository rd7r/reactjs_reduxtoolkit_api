const express = require('express');
const { getHeroeS, addHeroeS, putHeroeS, deleteHeroeS, OnegetHeroeS } = require('../services/HeroeService');
const app = express();

app.get('/heroe',async(req,res)=>{
    try {
        let from = req.params.from || 0;
        from = Number(from);
        let limit = req.params.limit || 3;
        limit = Number(limit);
        let attributes = 'id nombre tipo age gender habilidad img fecha_creation activo';
        return res.status(201).json(await getHeroeS(from,limit,activo = true,attributes));
    } catch (e) {
        console.log(e);
        return res.json({message: e})
    }
});

app.get('/heroe/:heroeid', async(req, res) => {
    try {
        let heroeid = req.params.heroeid;
        let attributes = 'id nombre tipo age gender habilidad img fecha_creation activo';
        let oneHeroe = await OnegetHeroeS(heroeid, attributes);
        return res.status(201).json({oneHeroe});
    } catch (e) {
        return res.json({message: e});
    }
});

app.post('/heroe',async(req, res)=>{
    try {
        let body = req.body;
        const heroe = await addHeroeS(body);
        return res.status(201).json(heroe);
    } catch (e) {
        return res.json({messsage: e});
    }
});

app.put('/heroe/:heroeid', async(req, res) => {
    try {
        let heroeid = req.params.heroeid;
        let body = req.body;
        const heroe = await putHeroeS({heroeid,...body});
        return res.status(201).json(heroe);
    } catch (e) {
        return res.json({message: e})
    }
});

app.delete('/heroe/:heroeid',async(req,res) => {
    try {
        let heroeid = req.params.heroeid;
        const heroe = await deleteHeroeS({heroeid});
        return res.status(201).json(heroe);
    } catch (e) {
        return res.json({message: e})
    }
});

module.exports = app;