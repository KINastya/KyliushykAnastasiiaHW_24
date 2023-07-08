const textBox = document.getElementById('myTextBox');
const divElement = document.getElementById('myDiv');

textBox.addEventListener('focus', () => {
    divElement.style.display = 'block';
});

textBox.addEventListener('blur', () => {
    divElement.style.display = 'none';
});
