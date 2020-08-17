// Determining even or odd program

function even_or_odd(num){

    if(num%2 == 0){
        alert(num + " is a Even Number");

    }else{
        alert(num + " is a Odd Number");
    }

}



let number = prompt("Enter a number: ");

even_or_odd(number);
