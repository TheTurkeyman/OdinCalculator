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


const inputline = document.querySelector('#calcinp');

function inputnumber(clicknum) {
    inputline.value += `${clicknum}`;
};
function plus () {
    inputline.value += `+`;
};

function evaluateInput() {
    const result = eval(inputline.value);
    inputline.value = `${result}`;}


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

document.addEventListener("keydown", (e) => {const key = e.key;        
    if (/[0-9+\-*/.=]/.test(key) || key === 'Enter') 
        {inputnumber(key === 'Enter' ? '=' : key);}
}); 

butplus.addEventListener("click", () => plus());

butequal.addEventListener("click", evaluateInput);