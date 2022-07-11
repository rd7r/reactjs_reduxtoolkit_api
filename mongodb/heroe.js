const mongoose = require('mongoose');

const { Schema } = mongoose;

const HeroeSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Se require el nombre']
    },
    tipo: {
        type: String,
        required: [true, 'Es requerido el tipo']
    },
    age: {
        type: Number,
        required: [true, 'Se requiere la edad']
    },
    gender: {
        type: String,
        required: [true, 'Se require el genero']
    },
    habilidad: {
        type: Array,
        required: [true, 'Se require las habilidades']
    },
    img: {
        type: String,
        required: [false,'Opcional']
    },
    fecha_creation: {
        type: Date,
        default: new Date(),
    },
    activo: {
        type: Boolean,
        required: [true, 'El valor es requerido']
    }
});

module.exports = mongoose.model('Heroe', HeroeSchema)