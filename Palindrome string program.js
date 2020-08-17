// Palindrome string program

function palindrome(str){

    let check = true;

    for(let i=0; i<str.length; i++){
        if(str[i] != str[str.length-1-i]){
            check = false;
        }
    }

    if(check){
        alert(str + " is a Palindrome String");
        document.write(str + " == " + temp + " is a Palindrome String")
    }else{
        alert(str + " is a Ordinary String");
    }

}


let string = prompt("Enter a number: ");

palindrome(string);
