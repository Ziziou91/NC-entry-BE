module.exports = {
    test : function(solution) {
        console.log('Count the characters');
        const randomStringGen = function () {
            const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
            const length = Math.floor(Math.random() * 100);
            let res = '';
            for (i=0; i < length; i++) {
                res += letters[Math.floor(Math.random() * letters.length)];
            }
            return res; 
        }
        const control = function (str, char) {
            let counter = 0;
            for (i=0; i<str.length; i++) {
                if (str[i] === char) counter++;
            }
            return counter;
        }
        const f = new Function(solution.function.arguments, solution.function.body);
        let result = {};
        const strings = ['hello', 'hello world', 'cats', 'a slightly longer string', randomStringGen()], chars = ['l','o','l','l','a'];
        return strings.map((string, index) => {
            if (f(string, chars[index]) === control(string, chars[index])) {
                return {'pass': true, 'msg': `counts all the occurances of ${chars[index]} in ${string}`, 'answer': f(string, chars[index])};
            }
            else {
                return {'pass': false, 'msg':`expected ${f(string, chars[index])} to equal ${control(string, chars[index])}`, 'answer': f(string, chars[index])};
            }
        });
    }
}

// module.exports = {
//     test : function (solution) {
//         console.log('sumOfOdds');
//         let result = {};
//         const data = [1,8,11,31,Math.round(Math.random() * 100)];
//         const control = function (n) {
//             let sum = 0;
//             for (i=1; i<=n; i+=2) {
//                 sum += i;
//             }
//             return sum;
//         }
//         const f = new Function(solution.function.arguments, solution.function.body);
//         return data.map(number => {
//             if (f(number) === control(number)) {
//                 return {'pass': true, 'msg': `adds odd numbers up to and including ${number}`, 'answer': f(number)};
//             }
//             else {
//                 return {'pass': false, 'msg':`expected ${f(number)} to equal ${control(number)}`, 'answer': f(number)};
//             }
//         });
//     }
// }