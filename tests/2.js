module.exports = {
    test : function (solution) {
        console.log('sumOfOdds');
        let result = {};
        const data = [1,8,11,31,Math.round(Math.random() * 100)];
        const control = function (n) {
            let sum = 0;
            for (i=1; i<=n; i+=2) {
                sum += i;
            }
            return sum;
        }
        const f = new Function(solution.function.arguments, solution.function.body);
        return data.map(number => {
            if (f(number) === control(number)) {
                return {'pass': true, 'msg': `adds odd numbers up to and including ${number}`, 'answer': f(number)};
            }
            else {
                return {'pass': false, 'msg':`expected ${f(number)} to equal ${control(number)}`, 'answer': f(number)};
            }
        });
    }
}