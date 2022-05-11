const Producto = require('../models/productos'); //consultar a la base

const ProductoContrl = {};

ProductoContrl.getProd= async (req, res) =>{
   const productos = await Producto.find() //buscar todos los productos de la base de datos
    res.json(productos);
};

ProductoContrl.createProd= async(req,res) =>{
   const prod = new Producto({
       nombre: req.body.nombre,
       marca: req.body.marca,
       cantidad: req.body.cantidad,
       precio: req.body.precio,
   });
   await prod.save();

   res.json({
       status: 'Producto Guardado'
   });
};

ProductoContrl.obtenerProd = async (req,res) =>{
    const prod = await Producto.findById(req.params.id);
    res.json(prod);
};

ProductoContrl.updateProd =  async (req, res) =>{ 
    const {id} = req.params;
    await Producto.findByIdAndUpdate(id,{$set: req.body},{new:true});
    res.json({status: 'Producto actualizado'});
};

ProductoContrl.deleteProd = async (req, res) =>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Eliminado'});
};


module.exports = ProductoContrl;