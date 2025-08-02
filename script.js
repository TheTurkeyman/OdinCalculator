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

function inputnumber(clicknum) 
{if (clicknum === '.') {
    const currentInput = inputline.value;
    const lastOperand = currentInput.split(/[+\-*/]/).pop();
    if (lastOperand.includes('.')) 
        {return;}}     
    inputline.value += `${clicknum}`;} 


function plus() {
    inputline.value += `+`;
};

function multiply() {
    inputline.value += `*`;
};

function subtract() {
    inputline.value += `-`;
};

function justdivide() {inputline.value += `/`};



function evaluateInput() {
    const result = eval(inputline.value);
    inputline.value = `${result}`;}

function mehminusone() {inputline.value = inputline.value .slice(0, inputline.value.length -1);}

function resetfunc() {inputline.value = '';};

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
dotdec.addEventListener("click", () => inputnumber(`.`));

clearbutton.addEventListener('click', () => resetfunc());

document.addEventListener("keydown", (e) => {const key = e.key;
         if (key === '=' || key === 'Enter') 
            {evaluateInput();} 
         else if (key === 'Backspace') {
        mehminusone();}
         else if (/[0-9+\-*/.]/.test(key)) 
            {inputnumber(key);}}); 
jsbackbutton.addEventListener(`click`, () => mehminusone());
butplus.addEventListener("click", () => plus());
butequal.addEventListener("click", evaluateInput);
butmultiply.addEventListener("click", () =>  multiply());
subtraction.addEventListener('click', () => subtract());
division.addEventListener('click', () => justdivide())