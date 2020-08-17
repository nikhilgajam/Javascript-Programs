// this keyword

// "this" is a keyword that allows an element to reference itself (Every object in the DOM has automatically generated "this")
// "this" allows to access an element's info (Without "this" it would be difficult for the function to know what data to use)

// Ex: onclick="doSomething(this)" (or you can place this.alt, this.innerHTML, etc)


function doSomething(element){

    alert(element.id);
    document.getElementById('message').innerHTML = element.alt;
    document.getElementById(element.id).innerHTML = element.alt;
    
    // And more

}


// More Examples https://codepen.io/collection/Adbwgo/?cursor=ZD0wJm89MSZwPTEmdj00ODk1NDE=
