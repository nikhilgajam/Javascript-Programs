// LCM program

function lcm_value(num1, num2){
    let gcd = 0, lcm = 0;

    for(i=0; i<=num1 && i<=num2; i++){

        if(num1%i==0 && num2%i==0){
            gcd = i;
        }

    }

    lcm = (num1 * num2)/gcd;

    return lcm;

}


let number1 = prompt("Enter number 1: ");
let number2 = prompt("Enter number 2: ");

let value = lcm_value(number1, number2);

alert("LCM: " + value);
