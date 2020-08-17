// Prime numbers till num

function primes(num){
    let count = 0;

    for(i=1; i<=num; i++){
        count = 0;
        for(j=1; j<=num; j++){
            if(i%j == 0){
                count++;
            }
        }
        if(count == 2){
            document.write(i + "<br>")
        }
    }
}

let number = prompt("How many prime numbers you want: ");
primes(number);
