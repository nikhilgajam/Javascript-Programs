// Counting even and odd numbers

function count(num){
    let ec=0, oc=0;

    for(i=1; i<=num; i++){
        if(i%2 == 0){
            ec++;
        }else{
            oc++;
        }
    }

    alert("Even count: " + ec + "\nOdd count: " + oc);

}


let number = prompt("Enter a number: ");

count(number);
