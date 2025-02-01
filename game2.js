function playGameSimpleArithmetic() {
  let greeting = confirm('Привет, попробуй реши несколько моих задач.')
  if (greeting === false) {
    alert('Жаль(((');

  } else {
    alert('Поехали...');
    playGame2();
  }
}
function getRundomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame2() {

  let randomNum1 = getRundomNumb(1, 21);
  let randomNum2 = getRundomNumb(1, 21);

  let operators = ["+", "-", "*", "/"];
  let randomIndex = Math.floor(Math.random() * 4);
  const randomOpiraton = operators[randomIndex];
  let expression = `${randomNum1} ${randomOpiraton} ${randomNum2}`;
  console.log(expression);

  let result;
  switch (randomOpiraton) {
    case '+':
      result = randomNum1 + randomNum2;
      break;
    case '-':
      result = randomNum1 - randomNum2;
      break;
    case '*':
      result = randomNum1 * randomNum2;
      break;
    default:
      result = Math.ceil(randomNum1 / randomNum2);
      break;
  }
  console.log(result);

  function getUserAnswer() {
    let userAnswer;
    do {
      if (expression.includes('/')) {
        userAnswer = Number(prompt(`Реши простую арифметическую задачу ${expression}. При делении округляй вверх до целого числа. Введи ответ:`));
      } else {
        userAnswer = Number(prompt(`Реши простую арифметическую задачу ${expression}. Введи ответ:`));
      }
      if (isNaN(userAnswer)) {
        alert("Пожалуйста, введите число.");
      } else if (userAnswer === result) {
        alert('Верно!');
        break;
      } else {
        alert('Нерно! Попробуй еще.');
      }

    } while (userAnswer !== result);
  }
  getUserAnswer();
}