module.exports = {
    test : function (solution) {
        console.log('squareNumber');
        const data = [0,2,9,Math.round(Math.random() * 100)];
        const control = function (num) {
            return num * num;
        }
        const f = new Function(solution.function.arguments, solution.function.body);
        return data.map(number => {
            if (f(number) === control(number)) {
                return {'pass': true, 'msg': `returns the square of ${number}`, 'answer': f(number)};
            }
            else {
                return {'pass': false, 'msg':`expected ${f(number)} to equal ${control(number)}`, 'answer': f(number)};
            }
        });
    }
}