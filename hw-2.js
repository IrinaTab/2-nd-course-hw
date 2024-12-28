// Задание 1
let a = Number(10);
alert(a);
a = Number(20);
alert(a);

// Задание 2
const iPhoneRelease = 2007;
alert(`Года выпуска первого iPhone: ${iPhoneRelease}`);

// Задание 3
const nameJScreator = "Брэндон Айк (Brendan Eich)";
alert(`Создатель языка JavaScript: ${nameJScreator}`);

// Задание 4
let b = Number(10);
let c =Number(20);
let resultSumm = b + c;
alert(`Сумма переменных: ${resultSumm}`);
let resultDifference = c - b;
alert(`Разность переменных: ${resultDifference}`);
let resultMultiply = b * c;
alert(`Произведение  переменных: ${resultMultiply}`);
let resultDivision = c / b;
alert(`Частное переменных: ${resultDivision}`);

// Задание 5
let d = 2;
let result = d ** 5;
alert(`Два в пятой степени: ${result}`);

// Задание 6
a = Number(9);
b = Number(2);
let resultRemainder = a % b;
alert(`Остаток от деления: ${resultRemainder}`);

// Задание 7
let num = 1;
alert(num += 5);
alert(num -= 3);
alert(num *= 7);
alert(num /= 3);
alert(num++);
alert(num--);

// Задание 8
let age = Number(prompt(`Сколько вам лет?`));
let resultAge = age;
alert(`Вам ${age}?`)

// Задание 9
let user = {
    name: "Ирина Табия",
    age: 38,
    isAdmin: true
  };  
  console.log(user);

  // Задание 10
let nameGuest = prompt("Как тебя зовут?");
alert(`Привет, ${nameGuest}!`);