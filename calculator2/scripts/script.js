let buttons = document.querySelector('.button');

buttons.addEventListener('click', (event) => {
    const elem = event.target;
    let calcValue = document.querySelector('.Calc-input');
    

    if (elem.id === 'add') {
        calcValue.value = 0;
    } else if (elem.id === 'fourth') {
        calcValue.value /= 4;
    } else if (elem.id === 'clear') {
        calcValue.value = 0;
    } else if (elem.id === 'decimal') {
        if (!calcValue.value.includes('.')) {
            calcValue.value += '.';
        }
    } else if (elem.id ==='neg'){
        if (!calcValue.value.includes('-') && (calcValue.value !== '0')){
            calcValue.value = '-' + calcValue.value;
        } else{
            calcValue.value = calcValue.value.slice(1);
        }
    } else if (elem.className === 'number-button') {
        let userNum = elem.innerHTML;
        if (calcValue.value === "0") {
            calcValue.value = userNum;
        } else {
            calcValue.value += userNum;
        }
    } 
});