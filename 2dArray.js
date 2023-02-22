const products = [
    ['phone', 12563],
    ['leptop', 1234],
    ['Apple', 34324],
    ['Watch', 34533]
]

const findLarge = p =>{
let heighstScorer = p[0][0];
let heighstValue = p[0][1];

for(let i = 0; i < p.length; i++){
    if (heighstValue < p[i][1]) {
        heighstValue = p[i][1];
        heighstScorer = p[i][0]
    }
}
return heighstScorer;
}
console.log(findLarge(products));