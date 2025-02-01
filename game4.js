function gameStoneSnipPaper() {
    let greeting = confirm('Сыграй в популярную игру против компьютера.')
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
                break;
            }
        }
}
const countVictory = [];

function playGame4() {
    const mainArray = ["камень", "ножницы", "бумага"];
    let userAnswer = prompt('Введи свой выбор: камень, ножницы или бумага');
    let randomIndexOfMainArray = Math.floor(Math.random() * mainArray.length);
    let compSelectionRandom = mainArray[randomIndexOfMainArray];
        
    function checkresults() {
        if (userAnswer.toLocaleLowerCase() === mainArray[0] && compSelectionRandom.toLocaleLowerCase() === mainArray[1]) {
            alert(`Камень побеждает ножницы. Твой выбор: ${userAnswer}. Мой выбор: ${compSelectionRandom}. Ты победил!`);
            countVictory.push(1);
        } else if (userAnswer.toLocaleLowerCase() === mainArray[1] && compSelectionRandom.toLocaleLowerCase() === mainArray[2]) {
            alert(`Ножницы побеждают бумагу. Твой выбор: ${userAnswer}. Мой выбор: ${compSelectionRandom}. Ты победил!`);
            countVictory.push(1);
        } else if (userAnswer.toLocaleLowerCase() === mainArray[2] && compSelectionRandom.toLocaleLowerCase() === mainArray[0]) {
            alert(`Бумага побеждает камень. Твой выбор: ${userAnswer}. Мой выбор: ${compSelectionRandom}. Ты победил!`);
            countVictory.push(1);
        } else if (userAnswer.toLocaleLowerCase() === mainArray[1] && compSelectionRandom.toLocaleLowerCase() === mainArray[0]) {
            alert(`Камень побеждает ножницы. Мой выбор: ${compSelectionRandom}. Твой выбор: ${userAnswer}. Ты проиграл!`);
        } else if (userAnswer.toLocaleLowerCase() === mainArray[2] && compSelectionRandom.toLocaleLowerCase() === mainArray[1]) {
            alert(`Ножницы побеждают бумагу. Мой выбор: ${compSelectionRandom}. Твой выбор: ${userAnswer}. Ты проиграл!`);
        } else if (userAnswer.toLocaleLowerCase() === mainArray[0] && compSelectionRandom.toLocaleLowerCase() === mainArray[2]) {
            alert(`Бумага побеждает камень. Мой выбор: ${compSelectionRandom}. Твой выбор: ${userAnswer}. Ты проиграл!`);
        } else if (userAnswer.toLocaleLowerCase() === compSelectionRandom.toLocaleLowerCase()) {
            alert(`Мой выбор: ${compSelectionRandom}. Твой выбор: ${userAnswer}. Ничья!`);
        } else {
            alert(`А ты ввел слово некоррктно! Попробуй снова`);
            playGame4();
        }
    }
    checkresults();
}
function count() {
    let victores = countVictory.reduce((a, b) => a + b, 0);
    let defeats = 5 - victores;
    if (victores > defeats) {
        alert(`Игар окончена, счет: ${victores} : ${defeats} в твою пользу. Ты МАСЕТЕР!`);
    } else if (victores < defeats) {
        alert(`Игар окончена, счет: ${victores} : ${defeats} в мою пользу. В следующий раз, непременно, повезет!`);
    } else {
        alert(`Игар окончена, счет: ${victores} : ${defeats} У нас НИЧЬЯ!`);
    }
}























//  для получения выбора пользователя: "камень", "ножницы" или "бумага".
// Сгенерируйте случайный выбор компьютера.
// Создайте массив с возможными вариантами: 
// ["камень", "ножницы", "бумага"].
// Используйте функцию для генерации случайного индекса и выберите вариант для компьютера.
// Камень побеждает ножницы.
// Ножницы побеждают бумагу.
// Бумага побеждает камень.
// Если выборы совпадают, это ничья.
// Выведите результат:
// Выведите выборы пользователя и компьютера.
// Сообщите результат игры: победа, поражение или ничья.
