const butnine = document.querySelector(`#numnine`);
const buteight = document.querySelector(`#numeight`);
const butseven = document.querySelector(`#numseven`);
const butsix = document.querySelector(`#numsix`);
const butfive = document.querySelector(`#numfive`);
const butfour = document.querySelector(`#numfour`);
const butthree = document.querySelector(`#numthree`);
const buttwo = document.querySelector(`#numtwo`);
const butone = document.querySelector(`#numone`);
const butzero = document.querySelector(`#numzero`);
const butplus = document.querySelector(`#plus`);
const butequal = document.querySelector(`#equal`);
const butmultiply = document.querySelector(`#multiply`);
const dotdec = document.querySelector(`#dotfordecimal`)
const inputline = document.querySelector('#calcinp');
const clearbutton = document.querySelector(`#clearbutton`);
const jsbackbutton = document.querySelector(`#backbutton`);
const subtraction = document.querySelector(`#minus`);
const division = document.querySelector(`#divide`);

let firstOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;
let shouldReset = false;

function inputnumber(clicknum) {
  if (clicknum === '.') {
    handleDecimal();
    return;
  }

  if (shouldReset || waitingForSecondOperand) {
    inputline.value = clicknum;
    shouldReset = false;
    waitingForSecondOperand = false;
  } else {
    if (inputline.value === '0') {
      inputline.value = clicknum;
    } else {
      inputline.value += clicknum;
    }
  }
}

function handleDecimal() {
  if (shouldReset || waitingForSecondOperand) {
    inputline.value = '0.';
    shouldReset = false;
    waitingForSecondOperand = false;
  } else if (!inputline.value.includes('.')) {
    inputline.value += '.';
  }
}

function handleOperator(nextOp) {
  const inputValue = parseFloat(inputline.value);

  if (isNaN(inputValue)) return;

  if (currentOperator && waitingForSecondOperand) {
    if (nextOp === '-') {
      inputline.value = '-';
      waitingForSecondOperand = false;
      shouldReset = false;
      return;
    } else {
      currentOperator = nextOp;
      return;
    }
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    firstOperand = inputValue;
  } else if (currentOperator && !waitingForSecondOperand) {
    const result = calculate(firstOperand, inputValue, currentOperator);
    if (isNaN(result) || !isFinite(result)) {
      inputline.value = 'Error';
      resetfunc();
      return;
    }
    inputline.value = result;
    firstOperand = result;
    shouldReset = true;
  }

  waitingForSecondOperand = true;
  currentOperator = nextOp;
}

function calculate(first, second, op) {
  if (op === '+') return first + second;
  if (op === '-') return first - second;
  if (op === '*') return first * second;
  if (op === '/') return first / second;
}

function evaluateInput() {
  if (currentOperator === null || waitingForSecondOperand) return;

  const secondOperand = parseFloat(inputline.value);
  if (isNaN(secondOperand)) return;

  const result = calculate(firstOperand, secondOperand, currentOperator);
  if (isNaN(result) || !isFinite(result)) {
    inputline.value = 'Error';
    resetfunc();
    return;
  }

  inputline.value = result;
  firstOperand = null;
  currentOperator = null;
  waitingForSecondOperand = false;
  shouldReset = true;
}

function mehminusone() {
  inputline.value = inputline.value.slice(0, -1);
  if (inputline.value === '') {
    inputline.value = '0';
  }
}

function resetfunc() {
  inputline.value = '0';
  firstOperand = null;
  currentOperator = null;
  waitingForSecondOperand = false;
  shouldReset = false;
}

butnine.addEventListener("click", () => inputnumber(9));
buteight.addEventListener("click", () => inputnumber(8));
butseven.addEventListener("click", () => inputnumber(7));
butsix.addEventListener("click", () => inputnumber(6));
butfive.addEventListener("click", () => inputnumber(5));
butfour.addEventListener("click", () => inputnumber(4));
butthree.addEventListener("click", () => inputnumber(3));
buttwo.addEventListener("click", () => inputnumber(2));
butone.addEventListener("click", () => inputnumber(1));
butzero.addEventListener("click", () => inputnumber(0));
dotdec.addEventListener("click", () => inputnumber('.'));

clearbutton.addEventListener('click', () => resetfunc());

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === '=' || key === 'Enter') {
    evaluateInput();
  } else if (key === 'Backspace') {
    mehminusone();
  } else if (/[0-9.]/.test(key)) {
    inputnumber(key);
  } else if (/[+\-*/]/.test(key)) {
    handleOperator(key);
  }
}); 

jsbackbutton.addEventListener(`click`, () => mehminusone());
butplus.addEventListener("click", () => handleOperator('+'));
butequal.addEventListener("click", evaluateInput);
butmultiply.addEventListener("click", () => handleOperator('*'));
subtraction.addEventListener('click', () => handleOperator('-'));
division.addEventListener('click', () => handleOperator('/'));