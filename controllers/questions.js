

function getAllQuestions(req, res, next) {
    console.log(req)
        .then(articles => {
            res.send({articles})
        })
        .catch(err => next(err))
}

module.exports = getAllQuestions;