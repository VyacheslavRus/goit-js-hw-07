// Счетчик состоит из спана и кнопок, 
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue 
// в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement 
// для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
counterValue: document.querySelector('#value'),
addNumberBtn: document.querySelector('[data-action="increment"]'),
remuveNumberBtn: document.querySelector('[data-action="decrement"]'),
clearNumberBtn: document.querySelector('[data-action="clear"]')
};

let total = 0

function onClickIncrement () {
    total +=1
    refs.counterValue.textContent = total;
    console.log(total);
}

function onClickDecrement () {
    total -=1
    refs.counterValue.textContent = total;
    console.log(total);
}

function onClickClear () {
    total = 0
    refs.counterValue.textContent = total;
    console.log(total);
}

refs.addNumberBtn.addEventListener('click', onClickIncrement)
refs.remuveNumberBtn.addEventListener('click', onClickDecrement)
refs.clearNumberBtn.addEventListener('click', onClickClear)