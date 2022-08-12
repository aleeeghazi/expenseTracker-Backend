const router = require('express').Router()
const loanController = require('../controllers/loanController.js')

router.route('/').post(loanController.add)

router.route('/:user').get(loanController.getAll)


router.route('/:id')
    .delete(loanController.delete)
    .put(loanController.update)

module.exports = router