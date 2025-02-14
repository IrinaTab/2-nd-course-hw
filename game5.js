function gameQuiz() {
    let greeting = confirm('Давай сыграем в игру. Отвечай на вопросы викторины с вариантами ответов.')
    if (greeting === false) {
        alert('Жаль(((');

    } else {
        alert('Поехали...');
        playGame5();
    }
}
const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", " 2. Пять", " 3. Шесть"],
        correctAnswer: 2
    }
];

function playGame5() {
    let correctAnswersCount = 0;

    for(let i = 0; i< quiz.length; i++){
        let userAnswerSecondQuestion = Number(prompt(`Вопрос: ${quiz[i].question} Варианты ответа: ${quiz[i].options}. Введите номер варианта ответа:`));

        if (userAnswerSecondQuestion === quiz[i].correctAnswer) {
            alert("Правильный ответ!");
            correctAnswersCount++;

        } else {
            alert("Неправильный ответ.");
        }
    }
    
    alert(`Всего правильных ответов: ${correctAnswersCount}`);

}



