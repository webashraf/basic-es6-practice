// let user = {
//     id: 1,
//     name: 'Ali Ashraf',
//     age: 24,
//     father: 'Ahmed Ali', 
//     home: 'Rupganj',
//     ocupation: 'Student'
// }
// let userProperty = Object.keys(user)
// console.log(userProperty);
// let userValues = Object.values(user)
// console.log(userValues)
// for (let i = 0; i < userProperty.length; i++) {
//     const element = userProperty[i];
//     let userValueper = user[element];
//     // console.log(element, ' = ', userValueper);
// }

// for(let userDetail in user){
//     let result = user[userDetail]
//     console.log(result)
// }

// let friends = ['Emon', 'Rayhan', 'Sohan', 'Yasin', 'Aladdin'];

// console.log(friends.slice(1, 3))
// let artic = 'Hello!! I am ali ashraf';

// console.log(artic.substring(1, 7));

// console.log(artic.includes('i am'));

// let bangladesh = {
//     name : 'Bangladesh',
//     area: 147570,
//     city: 'Dhaka',
//     food: 'rice',
//     language: 'Bangla'
// }
// let bangladeshObj = Object.keys(bangladesh)
// for (let i = 0; i < bangladeshObj.length; i++) {
//     const element = bangladeshObj[i];
//     const result = bangladesh[element];
//     console.log(element, '= ', result)
// }
// for(let banglaDsh in bangladesh){
//     console.log(banglaDsh, '= ',bangladesh[banglaDsh])
// }

// function foo(){
//     bar();
//     console.log('Foo')

// }
// function bar(){
//     console.log('Bar')
// }
// foo()

// function make_avg(n1, n2, n3){
//     return (n1 + n2 + n3) / 3
// }
// console.log(make_avg(10, 20, 30))

// function makeAvg(intgArr){
//     let result = 0;
//     let sum = 0;
//     for (let i = 0; i < intgArr.length; i++) {
//         const element = intgArr[i];
//         // console.log(element)
//         sum = element + sum
//         result = sum / intgArr.length;
        
//     }
//     return result
// }
// let intg = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(makeAvg(intg))

function even_odd(n){
    if(n % 2 == 0){
        // console.log('Even')
        return 'Even';
    }
    else{
        // console.log("Odd")
        return 'Odd';
    }
}
// even_odd(7)
console.log(even_odd(101))