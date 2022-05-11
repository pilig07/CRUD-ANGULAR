const express = require('express'); // crear rutas del servidor
const res = require('express/lib/response');
const ProductoContrl = require('../controllers/productos.controller');
const router = express.Router();

const ProdController = require('../controllers/productos.controller');

router.get('/',ProdController.getProd); //obtener todos los productos
router.post('/',ProdController.createProd); //crear producto
router.get('/:id',ProdController.obtenerProd); //obtener producto en especifico
router.put('/:id',ProdController.updateProd); //editar producto
router.delete('/:id', ProdController.deleteProd); //eliminar producto


module.exports = router;