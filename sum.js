/* const numbers = [45, 54, 55, 60, 30, 6, 37];
console.log(numbers); */


/* const numbers = [45, 54, 55, 60, 30, 6, 37];
for(let i = 0; i < numbers.length; i++){
    console.log(i);
} */


/* 
const numbers = [45, 54, 55, 60, 30, 6, 37];
for(let i = 0; i < numbers.length; i++){
    var element = numbers[i];
    console.log(element);
} */


/* const numbers = [45, 54, 55, 60, 30, 6, 37];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log(sum); */


/* function totalArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = totalArray([32, 45, 67]);
console.log('Array total: ',total);
 */


function totalArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const array = [32, 45, 67]; 
const total = totalArray(array);
console.log('Array total: ',total);
