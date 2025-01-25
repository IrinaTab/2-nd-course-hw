function playGameSimpleArithmetic() {
  let greeting = confirm('Привет, попробуй реши несколько моих задач.')
  if (greeting === false) {
    alert('Жаль(((');
    
  } else {
    alert('Поехали...');
    playGame();
  }
}
function getRundomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  let randomNum1 = getRundomNumb(1, 11);
  let randomNum2 = getRundomNumb(1, 11);
  
  let randomOpiraton  = Math.random() < 0.25 ? '+' : (Math.random() >= 0.5 && Math.random() <= 0.75 ? '-' : (Math.random() > 0.75 ? '*' : '/'));
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
      result = randomNum1 / randomNum2;
      break;
  }
  console.log(result);
  
function correctOp() {
  do {
    getRundomNumb(min, max);
  } while (isNaN(result) || result % 1 !== 0) {
    console.log(expression);
  }
}

  function getUserAnswer() {
    let userAnswer;
    do {
      userAnswer = Number(prompt(`Реши простую арифметическую задачу ${expression}. Введи ответ:`));
      
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