// Задание 1
let password ="ASD123";
let passwordUser = prompt("Введите пароль");

if (passwordUser===password) {
    alert ("Пароль введен верно");
}else{
    alert ("Пароль введен неправильно");
}

// Задание 2
let c = 12;
if (c >= 0 && c <= 10) {
    console.log ('Верно');
}else{
    console.log ('Неверно');
}

// Задание 3
let d =12;
let e =101;

if (d > 100 || e > 100) {
    alert ('Верно');   
}else{
    alert ('Неверно');
}

// Задание 4
let a = '2';
let b = '3';

a = Number(2);
b = Number(3);
alert(a + b);

// Задание 5
var monthNumber = prompt('Введите месяц');
switch (monthNumber) {
    case '1':
        alert ('Зима');
        break;
    case '2':
        alert ('Зима');
        break;
    case '3':
        alert ('Весна');
        break;
    case '4':
        alert ('Весна');
        break;
    case '5':
        alert ('Весна');
        break;
    case '6':
        alert ('Лето');
        break;
    case '7':
        alert ('Лето');
        break;
    case '8':
        alert ('Лето');
        break;
    case '9':
        alert ('Осень');
        break;
    case '10':
        alert ('Осень');
        break;
    case '11':
        alert ('Осень');
        break;
    case '12':
        alert ('Зима');
        break;
    default:
        alert ('ввели что-то не то');
        break;
}

// Дополнительные задания
// Задание 1
let anyNumber = Number(prompt('Пожалуйста, введите любое число'));
let check = anyNumber % 2;

if (check === 0 && anyNumber != 0) {
    alert ('Число четное');
}else if (anyNumber === 0) {
    alert ('Введен 0');
}else{
    alert ('Число нечетное');
}

// Задание 2
let clientOS = Number(prompt('Если у вас операционная система iOS, введите 0. Если Android, введите 1'));

if (clientOS === 0) {
    alert ('Установите версию приложения для iOS по ссылке');    
}else if (clientOS === 1) {
    alert ('Установите версию приложения для Android по ссылке');    
}else{
    alert ('Выбран не верный шифр')
}

// Задание 3
clientOS = Number(prompt('Если у вас операционная система iOS, введите 0. Если Android, введите 1'));
let clientDeviceYear = Number(prompt('Укажите год выпуска вашего мобильного устройства'));

if (clientOS === 0 && clientDeviceYear >= 2015) {
    alert ('Установите версию приложения для iOS по ссылке');    
}else if (clientOS === 1 && clientDeviceYear >= 2015) {
    alert ('Установите версию приложения для Android по ссылке');    
}else if (clientOS === 0 && clientDeviceYear <= 2015) {
    alert ('Установите облегченную версию приложения для iOS по ссылке');    
}else if (clientOS === 1 && clientDeviceYear <= 2015) {
    alert ('Установите облегченную версию приложения для Android по ссылке');    
}else{
    alert ('Некорректные данные. Попробуйте ввести снова')
}
