// console.log('Kitten!');

// import { myCar } from "./data.js";
// console.log(myCar);

const nameBox = 
document.getElementById('firstname');

nameBox.backgroundColor = 'red';

const myInput = document.getElementById('entername');
const button = document.getElementById('enternamebutton');

//Can use a const/var to replace the second arg
// button.addEventListener('click', () => {
//     nameBox.textContent = myInput.value;
// });

const exampler = () => {
    nameBox.textContent = myInput.value
};

button.addEventListener('click', exampler);