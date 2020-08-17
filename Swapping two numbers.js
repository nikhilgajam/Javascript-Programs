// Swapping two numbers

function swap(num1, num2){
    let temp;

    temp = num1;
    num1 = num2;
    num2 = temp;

    alert("Number 1: " + num1 + "\n" + "Number 2: " + num2);

}




let number1 = prompt("Enter number 1: ");
let number2 = prompt("Enter number 2: ");

swap(number1, number2);
