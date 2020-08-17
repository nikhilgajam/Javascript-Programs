// Palindrome number program

function palindrome(num){
    let n, r, temp;
    temp = num;
    n = r = 0;

    while(num > 0){
        n = num%10;
        n = Math.floor(n);
        r = r*10+n;

        num = Math.floor(num/10);
    }

    if(temp == r){
        alert(temp + " == " + r + " is a Palindrome Number");
    }else{
        alert(temp + " != " + r + " is a Ordinary Number");
    }

}


let number = prompt("Enter a number: ");

palindrome(number);
