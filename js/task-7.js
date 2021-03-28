// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const fontSize =document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');

spanText.style.fontSize = '15px'

const fn = (el) => {
    spanText.style.fontSize = `${el.target.value}px`
}

fontSize.addEventListener('input', fn)