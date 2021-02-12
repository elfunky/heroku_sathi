const ProductsController = require('../controllers/ProductsController');

const router = require('express').Router();

//Method To Render Page
router.get('/', ProductsController.renderPage);

//Route To Create Product
router.post('/create', ProductsController.create);

//Route To Update Product
router.put('/update', ProductsController.update);

module.exports = router;