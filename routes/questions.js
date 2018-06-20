// Solution format will always be {"function":{"arguments":"number","body":"return number * number"}}
// q1 {"function":{"arguments":"number","body":"return number * number"}}
// q2 {"function":{"arguments":"number","body":"let sum = 0;for (i=1; i<=n; i+=2) {sum += i;} return sum;"}}
// q3 {"function":{"arguments":"number, n","body":"let counter = 0; for (i=0; i<number.length; i++) {if(number[i]=== n) counter++;}return counter;"}}

const router = require('express').Router();
const {getQuestionById} = require('../controllers/questions');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
})
router.get('/', function (req, res) {
    console.log(req.params);
    res.status(200).send('All OK from /api/question');
})
router.get('/:question_id', (req, res) => {
    res.status(200).send('All OK from /api/question/:question_id');
})
router.post('/:question_id', (req, res) => {
    let test = require(`../tests/${req.params.question_id}.js`).test;
    res.status(200).send(JSON.stringify(test(req.body)));
})

module.exports = router;