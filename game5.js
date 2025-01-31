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
    let correctAnswersCount = [];

    function firstQuestion() {
        let userAnswerFirstQuestion = Number(prompt(`Вопрос: ${quiz[0].question} Варианты ответа: ${quiz[0].options}. Введите номер варианта ответа:`));

        if (userAnswerFirstQuestion === quiz[0].correctAnswer) {
            alert("Правильный ответ!");
            correctAnswersCount.push(1);
        } else {
            alert("Неправильный ответ.");
        }
    }
    firstQuestion();

    function secondQuestion() {
        let userAnswerSecondQuestion = Number(prompt(`Вопрос: ${quiz[1].question} Варианты ответа: ${quiz[1].options}. Введите номер варианта ответа:`));

        if (userAnswerSecondQuestion === quiz[1].correctAnswer) {
            alert("Правильный ответ!");
            correctAnswersCount.push(1);
        } else {
            alert("Неправильный ответ.");
        }

    }
    secondQuestion();

    function thirdQuestion() {
        let userAnswerThirdQuestion = Number(prompt(`Вопрос: ${quiz[2].question} Варианты ответа: ${quiz[2].options}. Введите номер варианта ответа:`));

        if (userAnswerThirdQuestion === quiz[2].correctAnswer) {
            alert("Правильный ответ!");
            correctAnswersCount.push(1);
        } else {
            alert("Неправильный ответ.");
        }
    }
    thirdQuestion();
    let sum = correctAnswersCount.reduce((a, b) => a + b, 0);
    alert(`Всего правильных ответов: ${sum}`);
}



