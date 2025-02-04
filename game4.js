function gameStoneSnipPaper() {
    let greeting = confirm('Сыграй в популярную игру против компьютера. Правила игры для определения победителя: Камень побеждает ножницы. Ножницы побеждают бумагу. Бумага побеждает камень.');
    if (greeting === false) {
        alert('Жаль(((');

    } else {
        alert('Поехали... У тебя пять попыток победить меня!');
        let roundCount = 0;
        while (roundCount < 5) {
            playGame4();
            roundCount++;
            if (roundCount === 5) {
                count();
            }
        }
    }
}
const rules = {
    "камень": "ножницы",
    "ножницы": "бумага",
    "бумага": "камень",
};

function playGame4() {
    const mainArray = ["камень", "ножницы", "бумага"];
    let userAnswer = prompt('Введи свой выбор: камень, ножницы или бумага').toLowerCase();;
    let randomIndexOfMainArray = Math.floor(Math.random() * mainArray.length);
    let compSelectionRandom = mainArray[randomIndexOfMainArray].toLowerCase();;

    function checkresults() {
        if (rules[userAnswer] === compSelectionRandom) {
            alert(`Твой выбор: ${userAnswer}. Мой выбор: ${compSelectionRandom}. Ты победил!`);
            return victories++;
        } else if (rules[compSelectionRandom] === userAnswer) {
            alert(`Мой выбор: ${compSelectionRandom}. Твой выбор: ${userAnswer}. Ты проиграл!`);
            return defeats++;
        } else if (userAnswer === compSelectionRandom) {
            alert(`Мой выбор: ${compSelectionRandom}. Твой выбор: ${userAnswer}. Ничья!`);
        } else {
            alert(`Ты ввел слово некоррктно! Попробуй снова`);
            playGame4();
        }
    }
    checkresults();
}
let victories = 0;
let defeats = 0;

function count() {
    if (victories > defeats) {
        alert(`Игра окончена, счет: ${victories} : ${defeats} в твою пользу. Ты МАСЕТЕР!`);
    } else if (victories < defeats) {
        alert(`Игра окончена, счет: ${victories} : ${defeats} в мою пользу. В следующий раз, непременно, повезет!`);
    } else {
        alert(`Игра окончена, счет: ${victories} : ${defeats} У нас НИЧЬЯ!`);
    }
}