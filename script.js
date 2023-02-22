// let number = [  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,  1];
// console.log(number.sort((a, b) => a - b));

// let year = 2020;

// if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
//     console.log('Leap Year');
// }
// else{
//     console.log('not leap year')
// }

// for (let i = 1; i < 50; i++) {
// if ((i % 3 == 0) || (i % 5) == 0) {
//     console.log(i)
// }
// }

// let names = ['AAAAAAAAAAAA', 'BBBBBBBBBBBBBB', 'CCCCCCCCCCCCCCCCCCCCCC', 'DDDDDDDDDDDD', 'EEEEEEEEEEEEEEEEEEEEEEEEE'];

// let bigName = [0];
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     if (element.length > bigName.length) {
//         bigName = element;
//     }
// }
// console.log(bigName)
// let ludu = (a, b) =>{
//     return Math.round(Math.random() * (a - b) + b)
// }
// console.log(ludu(1, 6))

// let allNumber = [12, 11, 10,  9,  8,  7, 20, 19, 10000, 18, 17, 10,  9,  8,  7, 16, 15, 14, 5,  4,  3,  2, 13, 6,  5,  4,  3,  2000000,  1];

// let result = 0;
// for (let i = 0; i < allNumber.length; i++) {
//     const element = allNumber[i];
//     if (element > result) {
//         result = element;
//     }
// }
// console.log(result)

// let allNumbers = [12, 11, 10,  9,  8, 12 ,10,  7, 20, 20];

// let uniqueNumbers = [];
// for (let i = 0; i < allNumbers.length; i++) {
//     let number = allNumbers[i];
//     let numberIndex = uniqueNumbers.indexOf(number);
//     if (numberIndex === -1) {
//         uniqueNumbers.push(number);
//     }
// }
// console.log(uniqueNumbers)

// for(let i = 30; i < 86; i++){
//     if(i > 44){
//         break;
//     }
//     else{
//         console.log(i)
//     }
// }

// let bookPrice = [80, 120, 130, 190, 200, 230, 245, 400, 600, 1200, 30, 50, 100, 60]

// for (let i = 0; i < bookPrice.length; i++) {
//     const price = bookPrice[i];
//     if (price > 200) {
//         continue;
//     }
//     else{
//         console.log(price)
//     }
// }

// let taka = 10000;

// if (taka >= 80000) {
//     console.log("I buy a mac")
// }
// else if(taka >= 60000){
//     console.log("I will buy a gamming leptop")
// }
// else if(taka >= 40000){
//     console.log("I will buy lenovo yoga")
// }
// else if(taka >= 20000){
//     console.log('I will buy second heand leptop')
// }
// else{
//     console.log('I will buy a smart phone')
// }