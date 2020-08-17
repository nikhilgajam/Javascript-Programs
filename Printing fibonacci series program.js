// Printing fibonacci series

function fib(num){
    let a=0, b=1, c=0;

    for(let i=0; i<=num; i++){

        document.write(a + "<br>");

        c = a+b;
        a = b;
        b = c;

    }

}


let value = prompt("Enter a number: ");

fib(value);
