const router = require('express').Router();
const questionRouter = require('./questions');


router.get('/', );
router.use('/question', questionRouter);

module.exports = router;