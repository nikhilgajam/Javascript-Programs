// innerHTML To Print

let tags = document.getElementsByTagName('h1');

for(let i=0; i<tags.length; i++){
    tags[i].innerHTML = "Hello World";
}
