
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;

const getInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("button");
startBtn.classList.add("start-btn");
startBtn.disabled = true;
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const pickedDate = selectedDates[0];
    
    
    if (!pickedDate) return;
    if (pickedDate.getTime() <= new Date()) {
      iziToast.show({
        message: "Please choose a date in the future",
        position: 'topRight',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        iconColor: '#ffffff',
        theme: 'dark',
        displayMode: 2,
        close: true,
        closeOnEscape: true,
        pauseOnHover: false,
        layout: 6,
        messageColor: '#ffffff',
        timeout: 5000,
});
  
      startBtn.disabled = true;
      userSelectedDate = null;
      return
    }
    userSelectedDate = pickedDate;
    startBtn.disabled = false;
    
  },

});

let timerId = null;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  getInput.disabled = true;
  getInput.style.color = "grey"
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const ms = userSelectedDate - currentTime;

    if (ms <= 0) {
      clearInterval(timerId);
      getInput.disabled = false;

      getInput.style.color = "#000000";
      return
    }
    const timeData = convertMs(ms);


    updateTimerInterface(timeData)
  }, 1000);
    
});


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


function updateTimerInterface({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = String(days).padStart(2, '0');
  document.querySelector('[data-hours]').textContent = String(hours).padStart(2, '0');
  document.querySelector('[data-minutes]').textContent = String(minutes).padStart(2, '0');
  document.querySelector('[data-seconds]').textContent = String(seconds).padStart(2, '0');
}


