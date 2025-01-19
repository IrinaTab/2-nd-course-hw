// Задание 1
function min(a, b) {

   if (a > b) {
        return b;
   } else {
        return a;
   }
}
min(8, 4);
min(6, 6);

// Задание 2
function evenNumber(c) {

      if (c % 2 === 0) {
        return `Число четное: ${c}`;
    } else {
        return `Число нечетное: ${c}`;
    }
}
evenNumber(5);
evenNumber(4);

// Задание 3.1
function squareNumber(d) {
    console.log(Number(d) ** 2); 
}
squareNumber(7);

// Задание 3.2
function squareNum(e) {
    return e ** 2;
}
let result = squareNum(4);

// Задание 4
function askUserAge() {

    let userAge = Number(prompt('Сколько вам лет?'));

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


    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return `Произведение a и b равно ${a * b}`;
    }
}
number(2, 3);
number(2, 'true');

// // Задание 6
function askNumber() {

    let userNumber = prompt('Введите любое число');

    if (isNaN(userNumber)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${userNumber} в кубе равняется ${userNumber ** 3}`;
    }
}
askNumber();

// Задание 7
function getArea() {

    let area = Math.PI * this.radius ** 2;
    
    console.log(`При радиусе ${this.radius}, Площадь круга равна ${area}`);
};

function getPerimeter() {
    let perimeter = 2 * Math.PI * this.radius;

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

