// Задание 1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// Задание 2
let a = 1;
do {
    console.log(a);
    a++;
}while (a <= 5);

// Задание 3
let b = 7;
do {
    console.log(b);
    b++;
}while (b <= 22);

// Задание 4
let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Задание 5
let n = 1000;
let num = 0;
while (n > 50) {
  n /= 2; 
  num++;
}
console.log("Результат деления: ", n);
console.log("Количество итераций: ", num);

// Задание 6
let firstFriday = 0;
while (firstFriday % 7 !== 3) {
  firstFriday++;
}
let day = firstFriday;
while (day <= 31) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
  day += 7;
}

// Дополнительные задания
// Задание 1
let k =100;
let iterations = 0;
while (k > 0) {
    k -= 7;
    iterations++;
}
console.log('Результат', k);
console.log('Количество итераций', iterations);

// Задание 2
const month = {
    Январь: 1,
    Февраль: 2,
    Март: 3,
    Апрель: 4,
    Май: 5,
    Июнь: 6,
    Июль: 7,
    Август: 8,
    Сентябрь: 9,
    Октябрь: 10,
    Ноябрь: 11,
    Декабрь: 12
}
for (let key in month) {
    console.log(`${key}: ${month[key]}`);
}
// Задание 3
let book = {
    'название': "Сказка о золотой рыбке",
    'автор': "А.С. Пушкин",
    'год издания': '1833 год',
    'жанр': 'Сказка'
}
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Задание 4
const numbers = [71, 62, 15, 76, 33, 45, 20, 100, 85, 17];

let minNumber = numbers[0];
for (let anyNumber = 0; anyNumber < numbers.length; anyNumber++) {
  if (numbers[anyNumber] < minNumber) {
    minNumber = numbers[anyNumber];
  }
}
console.log("Минимальное число в массиве:", minNumber);
