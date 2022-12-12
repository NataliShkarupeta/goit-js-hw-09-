const startButEl = document.querySelector('button[data-start]');
const stopButEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
const CANGE_DELAY = 1000;

startButEl.addEventListener('click',startChangeColor)

function startChangeColor(e){
    constId = setInterval(() =>{
        bodyEl.style.backgroundColor = getRandomHexColor();
    },CANGE_DELAY);
    startButEl.setAttribute("disabled", "disabled")
}


stopButEl.addEventListener('click',stopChangeColor)

function stopChangeColor(e){
    clearInterval(constId)
    startButEl.disabled = false;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
