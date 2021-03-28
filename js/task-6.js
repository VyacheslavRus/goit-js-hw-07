let input = document.querySelector('#validation-input');

const eventHendler = () => {
    console.log(input.value.length);

    if(Number(input.dataset.length) !== input.value.length) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
};

input.addEventListener('blur', eventHendler);