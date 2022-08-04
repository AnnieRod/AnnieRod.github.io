var displayDiv = document.querySelector('#display');
var num1 = "";
var num2 = "";
var operator = "";

// display.innerText = "new value";

function press(num) {
    num1 += num;
    displayDiv.innerHTML = num1;
}


function opNum (button) {
    operator = button;
    num2 = num1; 
    num1 = "";

}

function calc () {
    var x = parseFloat(num2);
    var y = parseFloat(num1);
    var equals = 0;

    if (operator == "+") {
        equals = x + y;
    }
    else if (operator == "-") {
        equals = x - y;
    }
    else if (operator == "*") {
        equals = x * y;
    }
    else if (operator == "/") {
        equals = x / y;
    }
    num1 = equals;
    operator = "";
    displayDiv.innerHTML = equals;
}

function clearNum() {
    num1 = "";             //si no dejo vacias estas variables 
    num2 = "";             // cuando resiono un num tras borrrar
    operator = "";         // aparecen los numeros que tenian antes otra vez
    displayDiv.innerHTML = "0";
    
}