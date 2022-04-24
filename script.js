// Calculator DOMs
const numButton = document.querySelectorAll('.num');
const delButton = document.querySelector('.del');
const clearEntry = document.querySelector('.clear-entry');
const allClear = document.querySelector('.all-clear');
let screen = document.querySelector('.screen');
screen.textContent ='0';
firstOperand = '';
secondOperand = '';
// Event Listeners
// Inputs Numbers on Screen
numButton.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent == '0') {
            screen.textContent = `${screen.textContent.slice(0,-1)}`;
        }
        if (screen.textContent.length < 18) {
            screen.textContent += `${button.textContent}`;
        }
    });
}); 
// Special Operator
// Deletes Input
delButton.addEventListener('click', () => {
    screen.textContent = `${screen.textContent.slice(0,-1)}`;
    if (screen.textContent.length == 0) {
        screen.textContent = '0';
    }
});
// Clears Input
clearEntry.addEventListener('click', () => {
    screen.textContent = '';
});
// Delete All Operands
allClear.addEventListener('click', () => {
    screen.textContent ='0';
    firstOperand = '';
    secondOperand = '';
});


