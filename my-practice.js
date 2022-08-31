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

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        console.log('this is leap year', year);
        return true;
    }
    else {
        console.log('this is not leap year', year)
        return false;
    }
}
const birthdayYear = isLeapYear(2020);
console.log(birthdayYear);
const isbirthdayYear = isLeapYear(2027);
console.log(isbirthdayYear);
