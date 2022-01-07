let buttons = document.querySelector('.button');

buttons.addEventListener('click', (event) => {
    const elem = event.target;

    if (elem.id === 'double') {
        document.querySelector('.Calc-input').value *= 2;
    } else if(elem.id === 'fourth'){
        document.querySelector('.Calc-input').value /= 4;

    }



});