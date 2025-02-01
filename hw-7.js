// Задание 1
// Строка 'js'
// преобразована в верхний регистр с помощью метода 
// toUpperCase() и выведена.

let string = 'js';
alert(string.toUpperCase());


// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив,
// содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр 
// символов не влияет на результат.

const products = ['Бананы', 'Апельсины', 'Колбаса сливочная', 'Печенье', 'колбаса салями'];
const search = 'колбаса';

function filterProducts(array, product) {
    return array.filter(item => item.toLowerCase().startsWith(product.toLowerCase()));
}
console.log(filterProducts(products, search)); 


// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.


let myNumb = 32.58884;

let smallerWholeNumb = Math.floor(myNumb);
let biggerWholeNumb = Math.ceil(myNumb);
let wholeNumb = Math.round(myNumb);

console.log(`До меньшего целого: ${smallerWholeNumb}, До большего целого: ${biggerWholeNumb}, До ближайшего целого: ${wholeNumb}`);


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
let arrayNums = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...arrayNums);

let maxNumber = Math.max(...arrayNums);

console.log(`Минимальное значение: ${minNumber}, Максимальное значение: ${maxNumber}`);


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumb(1, 10)); 

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.

function getRandomArray(min, max) {
  let array = [];
  for (let index = 0; index < max / 2; index++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
    return array;
  }
console.log(getRandomArray(1, 7)); 


// Задание 8
// Вывести в консоль текущую дату.

let currentDate1 = new Date();
console.log(currentDate1);


// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
let currentDateMsec = +currentDate;
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDateMsec + days73;
let dateDays73 = new Date(searchDate);

console.log(dateDays73);


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function myDate() {
  let currentDate = new Date();
  const options = {day: 'numeric', month: 'long', year: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit'};
  const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
  const optionsWithWeekday = { ...options, weekday: "long" };
  const formattedDateWithWeekday = currentDate.toLocaleDateString('ru-RU', optionsWithWeekday);
  console.log(`${formattedDateWithWeekday} — это ${currentDate.toLocaleDateString('ru-RU', {weekday: "long"})}`);
}
myDate();