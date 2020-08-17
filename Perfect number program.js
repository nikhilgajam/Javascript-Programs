// Perfect number program Ex: 6

function perfect(num){
    let sum = 0;

    for(i=0; i<num; i++){
        if(num%i == 0){
            sum += i;
        }
    }

    if(sum == num){
        alert(num + " is a Perfect Number");
    }else{
        alert(num + " is a Ordinary Number");
    }

}

let number = prompt("Enter a number: ")
perfect(number);
