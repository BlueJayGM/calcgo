
const firstNumber = document.getElementById("first_number");
const secondNumber = document.getElementById("second_number");
const operator = document.getElementById("operator");
const result = document.querySelector(".result");
const error = document.querySelector('.error');

function calculator(event) {
  event.preventDefault();
  if (firstNumber.value.trim() && secondNumber.value.trim() && operator.value.trim() ){

    let values = [Number(firstNumber.value), Number(secondNumber.value), operator.value];

    switch (values[2]) {
      case '*':
        result.innerText = `= ${values[0] * values[1]}`;
        break;
      case '+':
        result.innerText = `= ${values[0] + values[1]}`;
        break;
      case '-':
        result.innerText = `= ${values[0] - values[1]}`;
        break;
      case '/':
        if (values[1] == 0 ) { 
          error.innerText = 'Impossível dividir por 0!';
          error.style.display = 'inline';
          break;
        } else if (error.style.display == 'inline') {
          error.style.display = 'none';
        }
        result.innerText = `= ${values[0] / values[1]}`;
        break;
      default:
        return;
    }


  } else {
    error.innerText = 'Dados Inválidos';
    error.style.display = 'inline';
  }
}

function blurOperator() {
  if ( operator.value.length > 0 && !['+', '/', '*', '-'].includes(operator.value) ) {
    error.innerText = 'Você deve passar um operador válido.';
    error.style.display = 'inline';
  } else {
    error.style.display = 'none';
  }
}

function changeOperator() {
  if ( operator.value.length == 0 || ['+', '/', '*', '-'].includes(operator.value) ) {
    error.style.display = 'none';
  }
}