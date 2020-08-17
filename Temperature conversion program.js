// Temperature conversion program

function temperature(){

    let op, temp;

    alert("Press 1 =  Celsius    -  Kelvin\n" + "Press 2 =  Celsius    -  Fahrenheit\n" + "Press 3 =  Kelvin     -  Fahrenheit\n" + "Press 4 =  Kelvin     -  Celsius\n" + "Press 5 =  Fahrenheit -  Celsius\n" + "Press 6 =  Fahrenheit -  Kelvin\n");

    let cases = prompt("Enter a number: ");
    cases = Number(cases);

    temp = prompt("Type temperature: ");
    temp = Number(temp);

    switch(cases){
        case 1:
            op = temp + 273.15;
            alert("°C - °K = " + op);
            break;
    
        case 2:
            op = (temp * 9/5) + 32;
            alert("°C - °F = " + op);
            break;
    
        case 3:
            op = (temp - 273.15) * 9/5 + 32;
            alert("°K - °F = " + op);
            break;
    
        case 4:
            op = temp - 273.15;
            alert("°K - °C = " + op);
            break;
    
        case 5:
            op = (temp - 32) * 5/9;
            alert("°F - °C = " + op);
            break;
    
        case 6:
            op = (temp - 32) * 5/9 + 273.15;
            alert("°F - °K = " + op);
            break;
    
        default:
            alert("Type Only The Numbers Shown On The Screen\n");
    
        }

        return op;
}


temperature();
