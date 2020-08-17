// Prime or not program

function prime(num){
    let count = 0;
    for(i=1; i<=num; i++){
        if(num%i == 0){
            count++;
        }
    }

    if(count == 2){
        alert(num + " is a Prime Number");
    }else{
        alert(num + " is a Ordinary Number");
    }
}


let number = prompt("Enter a number: ");

prime(number);
