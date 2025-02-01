function turnTextOver() {
    let greeting = confirm('Давай сыграем в игру. Попробуй ввести текст, который будет перевернут.')
    if (greeting === false) {
        alert('Жаль(((');

    } else {
        alert('Поехали...');
        playGame3();
    }
}
function playGame3() {
    let userText = prompt('Введи свой текст:');
    let turnWords = userText.split(' ').reverse().join(' ');
    let turnLetters = userText.split('').reverse().join('');
    let regExp = /\s/;

    if (regExp.test(userText)) {
        alert(`Если перевернуть слова, то получится: ${turnWords}, а если буквы: ${turnLetters}`);
    } else {
        alert(`Наоборот: ${turnLetters}`);
    }
}
