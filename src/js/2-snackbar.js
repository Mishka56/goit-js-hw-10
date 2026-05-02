// const getForm = document.querySelector(".form");


// let delay;

// const handleInput = ((event) => {
// 	event.preventDefault();
// 	const input = event.target.elements;
// 	delay = input.delay.value;
// 	const getRadio = input.state.value;
// 	setTimeout(() => {
// 		if (getRadio === "fulfilled") {
// 			 Promise.resolve(`✅ Fulfilled promise in ${delay}ms`)
// 			.then(value => console.log(value))
// 	        .catch(error => console.log(error))
// 	} else {
// 	Promise.reject(`❌ Rejected promise in ${delay}ms`)
//     .then(value => console.log(value))
// 	.catch(error => console.log(error))
// 	}
			
		
// 	}, delay)

// getForm.reset()
// })
// getForm.addEventListener("submit", handleInput)




const getForm = document.querySelector(".form");

const makePromise = (delay, state) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (state === "fulfilled") {
				 iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        messageSize: '16px',
        backgroundColor: 'Green',
        iconColor: '#ffffff',
        theme: 'dark',
        displayMode: 1,
        // close: true,
        // closeOnEscape: true,
        pauseOnHover: false,
        layout: 2,
        messageColor: '#ffffff',
        timeout: 5000,
});
			} else {
					  iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
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
			console.log(value);
		})
		.catch((error) => {
			console.log(error);
		});
	getForm.reset();	
};

getForm.addEventListener("submit", handleInput);

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";