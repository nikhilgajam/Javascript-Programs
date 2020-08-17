// Armstrong number program Ex: 153

function armstrong(num){
    let n, r;
    n = r = 0;

    while(num>0){
        n = num%10;
        n = Math.floor(n);
        r = r+(n*n*n);

        num = Math.floor(num/=10);
    }

    return r;
}

let number = prompt("Enter a number: ")

let value = armstrong(number);


if(value == number){
    alert(number + " is a Armstrong Number");
}else{
    alert(number + " is a Ordinary Number");
}
