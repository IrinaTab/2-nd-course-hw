function gameRandomColors() {
    let greeting = confirm('Проверь свою интуицию, загадай цвет и нажми на кнопку "Изменить цвет"')
    if (greeting === false) {
        alert('Жаль(((');

    } else {
        alert('Поехали...');
        playGame6();
        playGame6Mob();
    }
}
// Функция для генерации случайного цвета
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}   

function playGame6() {
    const windowColorsEl = document.querySelector('.windowColors');

    windowColorsEl.classList.add('viewWindowColors');

    const viewWindowColorsEl = document.querySelector('.viewWindowColors');

    const btnChangeColorsEl = document.querySelector('.btn__changeColors');

    const btnChangeColorsEndEl = document.querySelector('.btn__changeColors_end');

    btnChangeColorsEl.addEventListener('click', () => {
        viewWindowColorsEl.style.backgroundColor = getRandomColor();
    });

    btnChangeColorsEndEl.addEventListener('click', () => {
        windowColorsEl.classList.remove('viewWindowColors');
    });

}

function playGame6Mob() {
    const windowColorsMobEl = document.querySelector('.windowColorsMob');

    windowColorsMobEl.classList.add('viewWindowColorsMob');

    const viewWindowColorsMobEl = document.querySelector('.viewWindowColorsMob');

    const btnChangeColorsMobEl = document.querySelector('.btn__changeColorsMob');

    const btnChangeColorsMobEndEl = document.querySelector('.btn__changeColorsMob_end');

    btnChangeColorsMobEl.addEventListener('click', () => {
        viewWindowColorsMobEl.style.backgroundColor = getRandomColor();
    });

    btnChangeColorsMobEndEl.addEventListener('click', () => {
        windowColorsMobEl.classList.remove('viewWindowColorsMob');
    });

}
