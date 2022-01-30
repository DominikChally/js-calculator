console.log('Hello world!');


function submit() {

    let op1 = document.getElementById("opperand1").value;
    let op2 = document.getElementById("opperand2").value;
    let operation = document.getElementById('operation').innerHTML;
    let result;

    if (operation === '+'){
        result = add(op1, op2);
    } else if (operation === '-') {
        result = sub(op1, op2);
    } else if (operation === 'x') {
        result = mult(op1, op2);
    } else if (operation === '/') {
        result = divide(op1, op2);
    }
    document.getElementById('opperand3').value = result
    
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function changeOperation(op) {
    document.getElementById('operation').innerHTML = op;
}