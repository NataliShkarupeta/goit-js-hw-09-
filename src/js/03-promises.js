import Notiflix from 'notiflix';

const formEl = document.querySelector('.form')
formEl.addEventListener('submit',procPromise)



function createPromise(position, delay) {
  return new Promise ((resolve,reject) => {
  const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
           if (shouldResolve) {
            resolve({position,delay});
          } else 
            reject({position,delay});
     },delay)
  }) 
  
}



function procPromise (event){
  event.preventDefault()
  const {elements} = event.target
  const {step,delay,amount} = elements;
  let delayValue = delay.value
  for(let i = 1; i <= +amount.value; i++){
    showNotify(createPromise(i,+delayValue))
   
    delayValue = +delayValue + +step.value;
  }
} 
 

function showNotify(promise) {
  promise
    .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
