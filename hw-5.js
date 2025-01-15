// Задание 1
function min(a, b) {

   if (a > b) {
        return b;
   } else {
        return a
   }
}
console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2
function evenNumber(c) {

      if (c % 2 === 0) {
        console.log(`Число четное: ${c}`);
    } else {
        console.log(`Число нечетное: ${c}`);
    }
}
evenNumber(5);
evenNumber(4);

// Задание 3
function squareNumber(d) {
    console.log(d * d); 
}
squareNumber(7);

function squareNum(e) {
    let result = e * e;
    console.log(result);
}
squareNum(4);

// Задание 4
function askUserAge() {

    let userAge = prompt('Сколько вам лет?');

    if (isNaN(userAge)) {
        alert('Вы ввели неправильное значение');
    } else {
        if (userAge <= 0) {
            alert('Вы ввели неправильное значение');
        } else if (userAge >= 1 && userAge <= 12) {
            alert('Привет, друг!');
        } else {
            alert('Добро пожаловать!');
        }
    }
}
askUserAge();

// Задание 5
function number(a, b) {

    let multy = a * b;

    if (isNaN(multy)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(`Произведение a и b равно ${multy}`);
    }
}
number(2, 3);
number(2, 'true');

// Задание 6
function askNumber() {

    let userNumber = prompt('Введите любое число');
    let cub = userNumber ** 3;

    if (isNaN(userNumber)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${userNumber} в кубе равняется ${cub}`)
    }
}
askNumber();

// Задание 7
const p = 3.14159;

function getArea() {
    const p = 3.14159;
    let area = p * this.radius ** 2;
    
    console.log(`При радиусе ${this.radius}, Площадь круга равна ${area}`);
};

function getPerimeter() {
    let perimeter = 2 * p * this.radius;

    console.log(`При радиусе ${this.radius}, Периметр круга равен ${perimeter}`);

};

let circle1 = {
    radius: 20,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

let circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}


circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();

