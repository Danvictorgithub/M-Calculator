// Calculator DOMs
const numButton = document.querySelectorAll('.num');
const delButton = document.querySelector('.del');
const clearEntry = document.querySelector('.clear-entry');
const allClear = document.querySelector('.all-clear');
const addition = document.querySelector('.addition')
let screen = document.querySelector('.screen');
addStatus = false;
screen.textContent ='0';
firstOperand = '';
total = '';
// Event Listeners
// Inputs Numbers on Screen
numButton.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent == '0') {
            screen.textContent = `${screen.textContent.slice(0,-1)}`;
        }
        if (screen.textContent.length < 18) {
            if (addStatus == true) {
                addStatusUpdate();
                screen.textContent = '';
            }
            screen.textContent += `${button.textContent}`;
        }
    });
});
// Functions
function addStatusUpdate () {
    if (addStatus == false) {
        addStatus = true;
        addition.classList.toggle("active");
        console.log("Now active");
    } else {
        addStatus = false;
        addition.classList.toggle("active");
        console.log("Now deactive");
    }
}
// Adds two Operand
addition.addEventListener('click', () => {
    addStatusUpdate();
    if (firstOperand.length == 0) {
        firstOperand = parseInt(screen.textContent);
    } else {
        firstOperand += parseInt(screen.textContent);
        total = firstOperand;
        screen.textContent = firstOperand;
    }
    console.log(firstOperand);
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
    firstOperand = 0;
    total = '';
});


