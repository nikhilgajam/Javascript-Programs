// GCD program


function gcd(num1, num2){
    let gcd=0;

    for(i=1; i<=num1 && i<=num2; i++){

        if(num1%i==0 && num2%i==0){
            gcd = i;
        }

    }

    return gcd;

}


let number1 = prompt("Enter number 1: ");
let number2 = prompt("Enter number 1: ");

let value = gcd(number1, number2);

alert("GCD: " + value);
