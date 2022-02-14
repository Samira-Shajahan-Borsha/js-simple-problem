//Task 1: Create a function that takes three numbers as input parameter and returns you the largest number of three

function getLargestNumber(firstNumber, secondNumber, thirdNumber){
    if(firstNumber > secondNumber && firstNumber > thirdNumber){
        return firstNumber;
    }
    else if(secondNumber > firstNumber && secondNumber > thirdNumber){
        return secondNumber;
    }
    else{
        return thirdNumber;
    }
}
var largestNumber = getLargestNumber(105, 855, 400);
console.log('Largest Number is:',largestNumber);


// Write a function to find the smallest of three numbers
function getSmallestNumber(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
    }
}
var smallestNumber = getSmallestNumber(450, 350, 58);
console.log('Smallest number:', smallestNumber);