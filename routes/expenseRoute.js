const router = require('express').Router();
const expensesController = require('../controllers/expense');
const thresholdController = require('../controllers/thresholdController');


router.route('/')
    .post(expensesController.add)

router.route('/:user')
    .get(expensesController.getAll)

router.route('/:id')
    .put(expensesController.update)
    .delete(expensesController.delete)

module.exports = router;