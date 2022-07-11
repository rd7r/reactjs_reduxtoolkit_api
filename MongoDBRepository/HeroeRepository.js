const mongoose = require('mongoose');
const Heroe = require('../mongodb/heroe');

const getHeroe = async(from, limit, filters, attributes) => {
    const rows = await Heroe.find(filters, attributes)
    .skip(from)
    .limit(limit)
    .exec();

    const count = await Heroe.find(filters).countDocuments();
    return {rows, count};
}

const getHeroeOne = async (heroeid, attributes) => {
    return await Heroe.findById(heroeid, attributes).exec();
}

const addHeroe = async(data) => {
    const postheroe = {
        ...data,
        activo: true
    }
    const heroe = new Heroe(postheroe);
    return await heroe.save();
}

const putHeroe = async({heroeid, nombre, tipo, age, gender, habilidad, img}) => {
    const heroe = await Heroe.findByIdAndUpdate(heroeid, {nombre, tipo, age, gender, habilidad, img});
    return heroe;
}

const deleteHeroe = async({heroeid}) => {
    let deleteactive = {
        activo: false
    }
    return await Heroe.findOneAndUpdate({_id: heroeid}, deleteactive);
}

const activatedstatus = async({heroeid, filters}) => {
    filters = {
        activo : true
    }
    return await Heroe.findByIdAndUpdate({_id: heroeid}, filters)
}

module.exports = {
    getHeroe,
    getHeroeOne,
    addHeroe,
    putHeroe,
    deleteHeroe,
    activatedstatus
}