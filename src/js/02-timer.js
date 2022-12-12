import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const butStart = document.querySelector('button');
const timeEl = document.querySelector('.timer').children;

const parentEl = document.querySelector('.timer')
parentEl.style.fontSize = '20px';
butStart.style.color = "red"



butStart.setAttribute("disabled", "false");
let t = 0;  

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        dateSelected = selectedDates[0];
        const dateNow =  new Date();
        t = dateSelected - dateNow;
            if(dateSelected < dateNow){
                Notiflix.Notify.info("Please choose a date in the future");
            } else {butStart.removeAttribute("disabled", "false")
            butStart.style.color = "green"}
    },
};

flatpickr('#datetime-picker', options);

butStart.addEventListener('click',timeСounter)

function timeСounter(){
    parentEl.style.fontWeight = '500';
    const Id = setInterval(() =>{
        t -= 1000;
        timeEl[0].firstElementChild.textContent = pad(convertMs(t).days);
        timeEl[1].firstElementChild.textContent = pad(convertMs(t).hours);
        timeEl[2].firstElementChild.textContent = pad(convertMs(t).minutes);
        timeEl[3].firstElementChild.textContent = pad(convertMs(t).seconds);
       
    if(t <= 0) clearInterval(Id)
    },1000)
}

function pad(value){
    return String(value).padStart(2,'0');
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  



