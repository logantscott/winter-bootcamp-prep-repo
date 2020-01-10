// console.log('Kitten!');

const aside = document.getElementById('boxtext');

const asideInput = document.getElementById('changeaside');

const asideButton = document.getElementById('changeasidebutton');

const changeAside = () => {
    aside.textContent = asideInput.value
};

asideButton.addEventListener('click', changeAside); 