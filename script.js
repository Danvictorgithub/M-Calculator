// Calculator DOMs
const numButton = document.querySelectorAll('.num');

const delButton = document.querySelector('.del');
const clearEntry = document.querySelector('.clear-entry');
const allClear = document.querySelector('.all-clear');

const addition = document.querySelector('.addition');
const substraction = document.querySelector('.minus');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector(".divide");
const equal = document.querySelector('.equal');

let screen = document.querySelector('.screen');
previousOp = 'add';
addStatus = false;
subStatus = false;
mulStatus = false;
divStatus = false;
screen.textContent ='0';
firstOperand = '';
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
                previousOp = 'add';
                console.log(previousOp);
            } else if (subStatus == true) {
                subStatusUpdate();
                screen.textContent = '';
                previousOp = 'sub';
                console.log(previousOp);
            } else if (mulStatus == true) {
                mulStatusUpdate();
                screen.textContent = '';
                previousOp = 'mul';
                console.log(previousOp);
            } else if (divStatus == true) {
                divStatusUpdate();
                screen.textContent = '';
                previousOp = 'div';
                console.log(previousOp);
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
    if (subStatus == true) {
        subStatusUpdate();
    }
    if (mulStatus == true) {
        mulStatusUpdate();
    }
    if (divStatus == true) {
        divStatusUpdate();
    }
    return addStatus;
}
function subStatusUpdate () {
    if (subStatus == false) {
        subStatus = true;
        substraction.classList.toggle("active");
        console.log("Now active");
    } else {
        subStatus = false;
        substraction.classList.toggle("active");
        console.log("Now deactive");
    }
    if (addStatus == true) {
        addStatusUpdate();
    }
    if (mulStatus == true) {
        mulStatusUpdate();
    }
    if (divStatus == true) {
        divStatusUpdate();
    }
    return subStatus;
}
function mulStatusUpdate () {
    if (mulStatus == false) {
        mulStatus = true;
        multiplication.classList.toggle("active");
        console.log("Now active");
    } else {
        mulStatus = false;
        multiplication.classList.toggle("active");
        console.log("Now deactive");
    }
    if (subStatus == true) {
        subStatusUpdate();
    }
    if (addStatus == true) {
        mulStatusUpdate();
    }
    if (divStatus == true) {
        divStatusUpdate();
    }
    return mulStatus;
}
function divStatusUpdate () {
    if (divStatus == false) {
        divStatus = true;
        division.classList.toggle("active");
        console.log("Now active");
    } else {
        divStatus = false;
        division.classList.toggle("active");
        console.log("Now deactive");
    }
    if (subStatus == true) {
        subStatusUpdate();
    }
    if (mulStatus == true) {
        mulStatusUpdate();
    }
    if (addStatus == true) {
        divStatusUpdate();
    }
    return addStatus;
}
function evaluation () {
    if (previousOp == 'add') {
        firstOperand += +screen.textContent;
        screen.textContent = firstOperand;
    } else if (previousOp == 'sub') {
        firstOperand -= +screen.textContent;
        screen.textContent = firstOperand;
    } else if (previousOp == 'mul') {
        firstOperand *= +screen.textContent;
        screen.textContent = firstOperand;
    } else if (previousOp == 'div') {
        firstOperand /= +screen.textContent;
        screen.textContent = firstOperand;
    } 
}
// Adds two Operand
addition.addEventListener('click', () => {
    addStatusUpdate();
    if (firstOperand.length == 0) {
        firstOperand = +screen.textContent;
    } else {
        evaluation();
        screen.textContent = firstOperand;
    }
    console.log(firstOperand);
});
substraction.addEventListener('click', () => {
    subStatusUpdate();
    if (firstOperand.length == 0) {
        firstOperand = +screen.textContent;
    } else {
        evaluation();
        screen.textContent = firstOperand;
    }
    console.log(firstOperand);
});
multiplication.addEventListener('click', () => {
    mulStatusUpdate();
    if (firstOperand.length == 0) {
        firstOperand = +screen.textContent;
    } else {
        evaluation();
        screen.textContent = firstOperand;
    }
    console.log(firstOperand);
});
division.addEventListener('click', () => {
    divStatusUpdate();
    if (firstOperand.length == 0) {
        firstOperand = +screen.textContent;
    } else {
        evaluation();
        screen.textContent = firstOperand;
    }
    console.log(firstOperand);
});
equal.addEventListener('click', () => {
    if (previousOp == 'add') {
        firstOperand += +screen.textContent;
        screen.textContent = firstOperand;
        firstOperand = '';
    } else if (previousOp == 'sub') {
        firstOperand -= +screen.textContent;
        screen.textContent = firstOperand;
        firstOperand = '';
    } else if (previousOp == 'mul') {
        firstOperand *= +screen.textContent;
        screen.textContent = firstOperand;
        firstOperand = '';
    } else if (previousOp == 'div') {
        firstOperand /= +screen.textContent;
        screen.textContent = firstOperand;
        firstOperand = '';
    }
});
// Special DELETE Operators
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
});


