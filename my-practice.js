// variable
// var myName = 'lolita';
// console.log(myName);

//array
// var friends = ['abul', 'habul', 'tabul', 'labul', 'chabul', 'kakatua', 'alif'];
// var fourthFriend = friends[4];
// console.log(fourthFriend);
// friends[4] = 'abal';
// console.log(friends);

//using of let

// let age = 23;
// const countryName = 'Bangladesh';
// console.log(age, countryName);

//inch to feet practice

// const myInches = 50;
// const myFeet = myInches / 12;
// console.log(myFeet);
// console.log('dadar feet', myFeet);//caile output er age comment kora jai ei bhabee.....


// // inch to feet using function

// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;

// }

// const dadaInches = 144;
// const dadaFeet = inchToFeet(dadaInches);
// console.log('dada asolei', dadaFeet);

// //milesTokilometer using function

// function milesToKilometer(miles) {
//     const kilometer = miles * 1.609;
//     return kilometer;

// }

// const roadMiles = 500;
// const roadkilometers = milesToKilometer(roadMiles);
// console.log('roar asholei', roadkilometers);


//odd even check

// function isEven(number) {
//     const remainder = number % 2;
//     console.log(remainder);

// }
// isEven(303);
// simple  kore check korlam

// function isEven(number) {
//     const remainder = number % 2;
//     if (remainder === 0) {
//         console.log('number is even')
//         return true;
//     }
//     else {
//         console.log('number is odd');
//         return false;
//     }

// }
// isEven(609);
// isEven(504);


// function isEven(number) {
//     const remainder = number % 2;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }
// const myNumberIsEven = isEven(509,);
// console.log(myNumberIsEven);
// const herNumberIsEVen = isEven(480);
// console.log(herNumberIsEVen);


//check leaf year

// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder == 0) {
//         console.log('this is leap year', year);
//         return true;
//     }
//     else {
//         console.log('this is not leap year', year)
//         return false;
//     }
// }
// const birthdayYear = isLeapYear(2020);
// console.log(birthdayYear);
// const isbirthdayYear = isLeapYear(2027);
// console.log(isbirthdayYear);

//finding odd numbers

// function getSumOfAnArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         console.log(index, element);
//     }
// }
// const mynumbers = [12, 13, 15, 16, 19, 11, 111, 123];
// getSumOfAnArray(mynumbers);
//that code is used only for showing index & elements parallaly



// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
// }
// const mynumbers = [12, 13, 15, 16, 19, 11, 111, 123];
// getSumOfAnArray(mynumbers);



//that code is used only for showing index  elements & sum of elements  parallaly and also use let sum outside of the for loop because the let sum calculate new one output of the outside of the totall elements..and also add sum = sum + element to add elements... without using let sum out of for loop its being 0 always and always added 0+ too..we can also use return sum outside of the for loop but we can't use return inside the for loop.. its also work as like let sum...as like


// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }
// const mynumbers = [12, 13, 15, 16, 19, 11, 111, 123];
// getSumOfAnArray(mynumbers);



// get odd number from array... this is the main code of this seassion...

// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     }
//     return sum;
// }
// function getOddNumbersOfAnArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             console.log(index, element);
//         }

//     }

// }
// const mynumbers = [12, 13, 15, 16, 19, 11, 111, 123, 124];
// getOddNumbersOfAnArray(mynumbers);
// getSumOfAnArray(mynumbers);

//if (element % 2 === 0) then it show all even number if (element % 2 !== 0) show all odd number..

//getting odd/even number sum below...this one is for odd..getting even..have to use if (element % 2 === 0)

// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         // console.log(index, element, sum);
//     }
//     return sum;
// }
// function getOddNumbersOfAnArray(numbers) {
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             console.log(index, element);
//             oddNumbers.push(element);
//         }

//     }
//     return oddNumbers;
// }
// const mynumbers = [12, 13, 15, 16, 19, 11, 111, 123, 124];
// const oddNumbers = getOddNumbersOfAnArray(mynumbers);
// console.log(oddNumbers);
// const oddNumberSum = getSumOfAnArray(oddNumbers);
// console.log('odd number sum', oddNumberSum);


// sumOfNumber....findout the sum of 1 to 7....

// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//     sum = sum + i;
//     console.log(i, sum);
// }


// doing it into function.... i can chose my number and put it in the field of number..thats it

// function sumOfNumber(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }


//multiplication have to start 1 ... let result = 1.....

//1*2*3*4*5*6*7

// function multiplicationOfNumbers(number) {
//     let result = 1;
//     for (let i = 1; i <= 7; i++) {
//         result = result * i;
//     }
//     return result;
// }
// const result = multiplicationOfNumbers(7);
// console.log(result);



// factorial is same concept of multiplication...


// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= 4; i++) {
//         result = result * i;
//     }
//     return result;
// }
// const result = factorial(4);
// console.log(result);



//factorial reverse

function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
const number = 5;
const fact = factorial(number);
console.log('reverse factorial of 5', number, fact);