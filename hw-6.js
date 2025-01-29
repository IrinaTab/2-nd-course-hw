// Задание 1
const massNubs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < massNubs.length; i++) {
    if (massNubs[i] == 10) {
        break;
    }
    console.log(massNubs[i]);
}

// Задание 2
let index = massNubs.indexOf(4);
console.log(index);

// Задание 3
const massNubs2 = [1, 3, 5, 10, 20];
let joindedMass = massNubs2.join(" ");
console.log(joindedMass);

// Задание 4
let bigMass = [];
for (let i = 0; i < 3; i++) {
    let subArray = [];
    for (let j = 0; j < 3; j++) {
        subArray.push(1);
    }
    bigMass.push(subArray);
}
console.log(bigMass); // Вывод: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

// Задание 5
const massNubs3 = [1, 1, 1];
massNubs3.push(2, 2, 2);
console.log(massNubs3);

// Задание 6
const massNubs4 = [9, 8, 7, 'a', 6, 5];
let massSort = massNubs4.sort();
const filterMassNubs = massSort.filter(item => item !== 'a');
console.log(filterMassNubs);

// Задание 7
const massNubs5 = [9, 8, 7, 6, 5];
let userAnswer;
do {
  userAnswer = Number(prompt('Угадай число в массиве:'));
  if (massNubs5.includes(userAnswer)) {
    alert('Угадал!');
} else {
    alert('Не угадал!');
}
} while (!massNubs5.includes(userAnswer));

// Задание 8
let string = 'abcdef';
string = string.split('').reverse().join('');
console.log(string);

// Задание 9
const massNubs6 = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log([...massNubs6[0], ...massNubs6[1]]);

// Задание 10
const array = [3, 5, 7, 2, 8];

for (let i = 0; i < array.length - 1; i++) {
  console.log(array[i] + array[i + 1]);
}

// Задание 11
const integers = [2, 4, 6, 8];
const squareNubs = integers.map(item => item ** 2);
console.log(squareNubs);

// Задание 12
const inputArray = ['Столы', 'Стол обеденный', 'Стол письменный'];

function getWordLengths(arr) {
    return arr.map((str) => {
        const words = str.split(' ');

        return words.map((word) => word.length);
    });
}

let wordLengths = getWordLengths(inputArray);
console.log(wordLengths);
    
// Задание 13
const massNubs7 = [1, -2, 5, -8, 6, -22];
const massNegativeNubs = massNubs7.filter(num => num < 0);
console.log(massNegativeNubs);

// Задание 14
function getRundomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNum1 = getRundomNumb(0, 10);
  let randomNum2 = getRundomNumb(0, 10);
  let randomNum3 = getRundomNumb(0, 10);
  let randomNum4 = getRundomNumb(0, 10);
  let randomNum5 = getRundomNumb(0, 10);
  let randomNum6 = getRundomNumb(0, 10);
  let randomNum7 = getRundomNumb(0, 10);
  let randomNum8 = getRundomNumb(0, 10);
  let randomNum9 = getRundomNumb(0, 10);
  let randomNum10 = getRundomNumb(0, 10);

  const massNubs8 = [randomNum1, randomNum2, randomNum3, randomNum4, randomNum5, randomNum6, randomNum7, randomNum8, randomNum9, randomNum10];

  console.log(massNubs8);

  let isContains = massNubs8.filter(num => num % 2 ==0);

  console.log(isContains);

// Задание 15
function getRundomNumbs(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randNum1 = getRundomNumb(1, 10);
  let randNum2 = getRundomNumb(1, 10);
  let randNum3 = getRundomNumb(1, 10);
  let randNum4 = getRundomNumb(1, 10);
  let randNum5 = getRundomNumb(1, 10);
  let randNum6 = getRundomNumb(1, 10);

  const massNubs9 = [randNum1, randNum2, randNum3, randNum4, randNum5, randNum6];


let sum = massNubs9.reduce((total, numb) => ((total + numb)));
let middleArithmetic = sum / massNubs9.length;
console.log(middleArithmetic);