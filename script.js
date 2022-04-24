const numButton = document.querySelectorAll('.num');
let screen = document.querySelector('.screen');
screen.textContent ='';
numButton.forEach(button => {
    button.addEventListener('click', () => {
        screen.textContent += `${button.textContent}`;
    });
}); 