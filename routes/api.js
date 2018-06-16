const router = require('express').Router();


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    res.send('Birds home page')
  })
// res.send('Hello world this is my app');

module.export = router;