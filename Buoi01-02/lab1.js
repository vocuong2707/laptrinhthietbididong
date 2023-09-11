// Coding Challenge #1
// let Mark = {
//     BMI: function(weight, height) {
//         return weight / height ** 2;
//     }
// }
// let John = {
//     BMI: function(weight, height) {
//         return weight / height ** 2;
//     }
// }

// let markHigherBMI = Mark.BMI(78, 1.69) > John.BMI(92, 1.95);
// console.log(markHigherBMI);

// markHigherBMI = Mark.BMI(95, 1.88) > John.BMI(85, 1.76);
// console.log(markHigherBMI);

// Coding Challenge #2

// function test(markBMI, JohnBMI) {
//     return markBMI > JohnBMI ? "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!";
// }

// console.log(test(Mark.BMI(78, 1.69), John.BMI(92, 1.95)));

// console.log(test(Mark.BMI(95, 1.88) > John.BMI(85, 1.76)));


// function test2(markBMI, JohnBMI) {
//     if (markBMI > JohnBMI) {
//         return `Mark's BMI ${markBMI} is higher than John's ${JohnBMI}!`;
//     } else {
//         return `John's BMI ${markBMI} is higher than Mark's ${JohnBMI}!`;
//     }
// }

// console.log(test2(Mark.BMI(78, 1.69).toFixed(2), John.BMI(92, 1.95).toFixed(2)));
// console.log(test2(Mark.BMI(95, 1.88).toFixed(2), John.BMI(85, 1.76).toFixed(2)));


// Coding Challenge #3


// 3.1
let Dolphins = {
    averageScore: function(score1, score2, score3) {
        return (score1 + score2 + score3) / 3;
    }
}

let Koalas = {
    averageScore: function(score1, score2, score3) {
        return (score1 + score2 + score3) / 3;
    }
}
console.log("Dolphins Score");
console.log(Dolphins.averageScore(96, 108, 89).toFixed(2));
console.log(Dolphins.averageScore(97, 112, 101).toFixed(2));
console.log(Dolphins.averageScore(97, 112, 101).toFixed(2));
console.log("=============================");

console.log("Koalas Score");
console.log(Koalas.averageScore(88, 91, 110).toFixed(2));
console.log(Koalas.averageScore(109, 95, 123).toFixed(2));
console.log(Koalas.averageScore(109, 95, 106).toFixed(2));


// 3.2

function winner(dolphinsScore, koalasScore) {
    if (dolphinsScore > koalasScore) {
        return `Dolphins Winner`;
    } else if (dolphinsScore < koalasScore) {
        return `Koalas Winner`;
    } else {
        return `Draw`;
    }
}

console.log(winner(Dolphins.averageScore(96, 108, 89).toFixed(2), Koalas.averageScore(88, 91, 110).toFixed(2)));
console.log(winner(Dolphins.averageScore(97, 112, 101).toFixed(2), Koalas.averageScore(109, 95, 123).toFixed(2)));
console.log(winner(Dolphins.averageScore(97, 112, 101).toFixed(2), Koalas.averageScore(109, 95, 106).toFixed(2)));

// 3.3

function test3(dolphinsScore, koalasScore) {

}