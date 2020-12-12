const router = require('express').Router()
const { BannerController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/', BannerController.create)
router.get('/', BannerController.getAll)




router.use('/:id', authorization)
router.get('/:id', BannerController.getOne)
router.put('/:id', BannerController.update)
router.delete('/:id', BannerController.delete)

module.exports = router