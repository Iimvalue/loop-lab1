// console.log("<<<<< Even Numbers >>>>>");

// for (let i = -25; i < 1; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// console.log("<<<<< Power Numbers >>>>>");

// for (let i = 1; i < 11; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// console.log("<<<<< Odd Numbers >>>>>");
// for (let i = 1; i < 21; i++) {
//   if (i % 2 != 0) console.log(i);
// }

// // Fibonacci sequence

// console.log("<<<<< Fibonacci sequence >>>>>");

// let number1 = 0;
// let number2 = 1;
// let temp;

// for (let i = 1; i < 11; i++) {
//   console.log(number1);
//   temp = number1 + number2;

//   number1 = number2;
//   number2 = temp;
// }


// Multiplication table

let sum = 0;
for(let i = 1; i<4; i++){
    for(let j =1; j<10; j++){
        sum = i * j;
        console.log(`${i} x ${j} = ${sum}`)
    }
}
