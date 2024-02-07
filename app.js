let counter = 0;

const counterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementbtn');
const decrementBtn = document.getElementById('decrementbtn');
const resetBtn = document.getElementById('resetbtn');


incrementBtn.addEventListener('click', function() {
	counter++;
	counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', function() {
	counter--;
	counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', function() {
	counter = 0;
	counterValue.innerHTML = counter;
});
