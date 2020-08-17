// Summation of a number program

function sum(num){
    let n, r;
    n = r = 0;

    for(; num>0; ){
        n = num%10;
        n = Math.floor(n);
        r = r+n;

        num = Math.floor(num/=10);
    }

    return r;
}

let number = prompt("Enter a number: ")

let value = sum(number);

alert("Summation is: " + "\n" + value);
