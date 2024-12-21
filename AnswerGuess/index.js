const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const headingEl = document.getElementById("heading"); 

const inputEl = document.getElementById('input');

headingEl.innerText = `What is ${num1} Multiply by ${num2}`;
const correctAns = num1 * num2;

const formEl = document.getElementById("form");
 formEl.addEventListener('submit' , () => {
    const userAns = inputEl.value;
    console.log(userAns,typeof userAns)
 })