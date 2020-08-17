// Reversing a number program

function rev(num){
    let n, r;
    n = r = 0;

    while(num>0){
        n = num%10;
        n = Math.floor(n);
        r = r*10+n;

        num = Math.floor(num/=10);
    }

    return r;
}

let number = prompt("Enter a number: ")

let value = rev(number);

alert("Value is: " + "\n" + value);
