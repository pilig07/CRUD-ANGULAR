const mongoose = require('mongoose'); //utilizar para definiir los esquemas de datos
const {Schema} = mongoose;

const ProductSchema = new Schema({
    nombre:{type: String, required: true},
    marca:{type: String, required: true},
    cantidad:{type: Number, require: true},
    precio: {type: Number, required: false}
})

module.exports = mongoose.model('Producto', ProductSchema);
