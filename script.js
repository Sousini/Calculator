
//OPERATIONS

function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b === 0) return "ERROR";
    return a/b;
}


function operate(operator, prev, current) {
    switch(operator) {
        case "+":
            return add(prev, current);
        case "-":
            return subtract(prev, current);
        case "*":
            return multiply(prev, current);
        case "/":
            return divide(prev, current);
    }
}

//DISPLAY
const container = document.querySelector("#container");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const buttons = document.querySelectorAll(".btn, .btn-op, #delete, #clear, #equals");
const deleteBtn = document.querySelector("#delete");
const clear = document.querySelector("#clear");





let first = "";
let second = "";
let operator = "";
let result = "";
let control = "";

let operators = ["+", "-", "*", "/"];
let numbers = ["0", "1", "2", 
               "3", "4", "5", 
               "6", "7", "8", 
               "9", "."];


function clearInput() {
    first = "";
    second = "";
    operator = "";
    result = "";
    control = "";
    display.value = "";
    return;
}

function deleteInput() {
    if(!operator) {
        first = first.slice(0, -1);
        display.value = first;
        return;
    } else if(operator && (!second)){
        operator = "";
        display.value = first;
        control = "";
        return;
    } else {
        second = second.slice(0, -1);
        display.value = control + second;
        return;
    }
}


function handleInput(value) {
        if(!second && operator && operators.includes(value)) return;
        
        if(value === "=" || (operator && operators.includes(value))) {
            if(first && operator && second) {
                result = operate(operator, Number(first), Number(second));

                first = result;
                second = "";
                if(operators.includes(value)) {
                    operator = value;
                    display.value = result;
                } else {
                    operator = "";
                    display.value = result;
                }

            }
        }
        

        if(!isNaN(value) || value === ".") {

            // impedir múltiplos pontos
            if (value === ".") {
                if (!operator && first.includes(".")) return;
                if (operator && second.includes(".")) return;
            }

            // impedir múltiplos zeros à esquerda
            if (value === "0") {
                if (!operator && first === "0") return;
                if (operator && second === "0") return;
            }

            // substituir "0" se vier outro número
            if (!isNaN(value) && value !== "0") {
                if (!operator && first === "0") first = "";
                if (operator && second === "0") second = "";
            }

            


            if(!operator){
                first += value;
                display.value = first;
            } else {
                second += value;
                display.value = control + second;
            }
            return;
        }

        if(operators.includes(value)) {
            if(first === ""){
                alert("Insert a number first!");
                return;
            }
            operator = value;
            display.value += " " + operator + " ";
            control = display.value;
        }

}

function handleKeyboardInput(key) {

    if(key === "enter"){
        handleInput("=");
        return;
    }

    if(key === "c"){
        clearInput();
        return;
    }
    
    if(key === "backspace") {
        deleteInput();
        return;
    }
    
    if(operators.includes(key)){
        handleInput(key);
    }

    if(numbers.includes(key)) {
        handleInput(key);
    }

}



buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        handleInput(value);
    })
})


document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    handleKeyboardInput(key);
})

clear.addEventListener("click", () => {
    clearInput();
})


deleteBtn.addEventListener("click", () => {
    deleteInput();
})