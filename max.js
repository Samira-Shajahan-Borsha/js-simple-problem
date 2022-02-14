const business = 450;
const minister = 550;
const army = 660;


//comapare 2
/* if(business > minister){
    console.log('business person is bigger');
}
else{
    console.log('minister person is bigger');
}
 */

function findLargest(first, second){
    if(first> second){
        return first;
    }
    else{
        return second;
    }
}
const largest = findLargest(354, 441);
console.log('largest is ', largest);





//compare 3
/* if(business > minister && business > army){
    console.log('business is bigger');
}
else if(minister > business && minister > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
} */




//by using math function
var max = Math.max(business, minister, army);
// console.log('largest is:', max);



