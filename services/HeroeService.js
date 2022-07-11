const { getHeroe, addHeroe, putHeroe, deleteHeroe, getHeroeOne } = require('../MongoDBRepository/HeroeRepository');

const getHeroeS = async(from, limit, filters,attributes) => {
    filters = {
        ...filters,
        activo: true
    }
    const {rows, count} =  await getHeroe(from,limit,filters,attributes);
    return {heroe: rows, count};
};

const OnegetHeroeS = async (heroeid, attributes) => {
    return await getHeroeOne(heroeid, attributes);
}

const addHeroeS = async({nombre, tipo, age, gender, habilidad, img}) => {
    return await addHeroe({nombre, tipo, age, gender, habilidad, img});
}

const putHeroeS = async({heroeid, nombre, tipo, age, gender, habilidad, img}) => {
    return await putHeroe({heroeid, nombre, tipo, age, gender, habilidad, img});
}

const deleteHeroeS = async({heroeid}) => {
    return await deleteHeroe({heroeid});
}

module.exports = {
    getHeroeS,
    OnegetHeroeS,
    addHeroeS,
    putHeroeS,
    deleteHeroeS,
}