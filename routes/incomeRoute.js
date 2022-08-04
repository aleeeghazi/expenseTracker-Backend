const router = require('express').Router()
const incomeController = require('../controllers/income.js')

router.route('/').post(incomeController.add)

router.route('/:user').get(incomeController.getAll)


router.route('/:id').delete(incomeController.delete)

module.exports = router