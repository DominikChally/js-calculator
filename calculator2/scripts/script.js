let buttons = document.querySelector('.button');
let operations = document.querySelector('.operations');


buttons.addEventListener('click', (event) => {
    const elem = event.target;
    let calcValue = document.querySelector('.Calc-input');
    const calculator = document.querySelector('.calculator');
    


    // Getting numbers in an array
    if (elem.classList.contains('operations')) {
        if (!sessionStorage['operationPressed']) {

            sessionStorage.setItem('firstNumber', calcValue.value);
            sessionStorage.setItem('operationPressed', elem.textContent);
            calcValue.value = 0;  
        } else {
            sessionStorage.setItem('operationPressed', elem.textContent);

        }
        console.log(sessionStorage.getItem('operationPressed'));
        //calculator.dataset.firstNumber = calcValue.value;
        //calculator.dataset.operationPressed = elem.textContent;

        console.log(sessionStorage['operationPressed']);
        //calcValue.value = 0;
        //console.log(calculator.dataset.operationPressed);
        //console.log(calculator.dataset.firstNumber);
    }


    if (elem.id === 'clear') {
        calcValue.value = 0;
        sessionStorage.clear();
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
        if (calcValue.value === '0') {
            calcValue.value = userNum;
        } else {
            calcValue.value += userNum;
        }
    } 

    if (elem.id === 'enter') {
        if (sessionStorage.getItem('firstNumber')  && sessionStorage.getItem('operationPressed')) {

            sessionStorage.setItem('secondNumber', calcValue.value);
            const operationPressed = sessionStorage.getItem('operationPressed');
            const firstNumber = parseFloat(sessionStorage.getItem('firstNumber'));
            const secondNumber = parseFloat(sessionStorage.getItem('secondNumber'));
            //calculator.dataset.secondNumber = calcValue.value;
            //console.log(calculator.dataset.secondNumber);
            
            if (operationPressed === '+') {
                calcValue.value = firstNumber + secondNumber;
            } else if (operationPressed === '-') {
                calcValue.value = firstNumber - secondNumber;
            } else if (operationPressed === 'x') {
                calcValue.value = firstNumber * secondNumber;
            } else if (operationPressed === '÷  ') {
                calcValue.value = firstNumber / secondNumber;
            }
            sessionStorage.setItem('operationPressed', '');
            
          
        }
    }
console.log(sessionStorage);
});
