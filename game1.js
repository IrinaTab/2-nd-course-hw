function playGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    let userAnswer;
    do {
        userAnswer = parseInt(prompt("Попробуй угадать случайное число от 1 до 100"));

        if (isNaN(userAnswer)) {
            alert("Пожалуйста, введите число.");
        } else if (userAnswer < 1 || userAnswer > 100) {
            alert("Число должно быть от 1 до 100.");
        } else {
            if (userAnswer > randomNumber) {
                alert('Не угадал. Моё число меньше, попробуй ещё.');
            } else if (userAnswer < randomNumber) {
                alert('Не угадал. Моё число больше, попробуй ещё.');
            }
        }
    } while (userAnswer !== randomNumber);

    alert(`Молодец! Угадал! Моё число ${randomNumber}`);
}
// playGame();