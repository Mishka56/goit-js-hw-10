
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const getForm = document.querySelector(".form");

const makePromise = (delay, state) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state === "fulfilled") {
		resolve(delay)
			} else {
		reject(delay)
			}
		}, delay);
	});
};

const handleInput = (event) => {
	event.preventDefault();

	const { delay, state } = event.target.elements;
	const delayValue = Number(delay.value);
	const stateValue = state.value;

	makePromise(delayValue, stateValue)
		.then((value) => {
	 iziToast.show({
        message: `✅ Fulfilled promise in ${value}ms`
,
        position: 'topRight',
        messageSize: '16px',
        backgroundColor: 'Green',
        iconColor: '#ffffff',
        theme: 'dark',
        displayMode: 1,
        close: true,
        closeOnEscape: true,
        pauseOnHover: false,
        layout: 2,
        messageColor: '#ffffff',
        timeout: 5000,
});
		})
		.catch((error) => {
	  iziToast.show({
        message: `❌ Rejected promise in ${error}ms`,
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
		});
	getForm.reset();	
};

if (getForm) {
  getForm.addEventListener("submit", handleInput);
      
}


