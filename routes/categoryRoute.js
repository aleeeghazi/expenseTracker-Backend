const router = require('express').Router();
const categoryController = require('../controllers/category');


router.route('/')
    .post(categoryController.add)

router.route('/:user/:type')
    .get(categoryController.getAll)
router.route('/:user')
    .get(categoryController.getAll)

router.route('/:id')
    .put(categoryController.update)
    .delete(categoryController.delete)

module.exports = router;