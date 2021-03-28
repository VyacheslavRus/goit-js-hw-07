// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs ={
input: document.querySelector('#name-input'),
outputSpan: document.querySelector('#name-output'),
notName: 'незнакомец',
}


refs.outputSpan.textContent = refs.notName

const eventHendler = event => {
    if (event.target.value.length > 0) {
        refs.outputSpan.textContent = event.target.value; 
    }
    else {
         refs.outputSpan.textContent = refs.notName;
    }
}

refs.input.addEventListener('input', eventHendler)
