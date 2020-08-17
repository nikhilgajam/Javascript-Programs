// Pattern printing program

function right_angled_triangle(num){
    for(i=1; i<=num; i++){
        for(j=1; j<=i; j++){
            document.write(j + " ");
        }
        document.write("<br>");
    }
}


function another_ra_triangle(num){
    for(i=num; i>=1; i--){
        for(j=1; j<=i; j++){
            document.write(j + " ");
        }
        document.write("<br>");
    }
}


function combined_ra_triangles(num){
    for(i=1; i<=num; i++){
        for(j=1; j<=i; j++){
            document.write(j + " ");
        }
        document.write("<br>");
    }

    for(i=num-1; i>=1; i--){
        for(j=1; j<=i; j++){
            document.write(j + " ");
        }
        document.write("<br>");
    }
}


function rl_triangle(num){
    let k = num * 2 - 2;

    for(i=1; i<=num; i++){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k - 2;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

function another_rl_triangle(num){
    let k = num * 2 - 2;

    for(i=num; i>=1; i--){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k + 2;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

function combined_rl_triangles(num){
    let k = num * 2 - 2;

    for(i=1; i<=num; i++){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k - 2;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }

    k = k + 4;

    for(i=num-1; i>=1; i--){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k + 2;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

function eq_triangle(num){
    k = num * 2 - 2;

    for(i=1; i<=num; i++){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k - 1;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

function another_eq_triangle(num){
    k = num * 2 - 2;

    for(i=num; i>=1; i--){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k + 1;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

function combined_eq_triangles(num){
    k = num * 2 - 2;

    for(i=1; i<=num; i++){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k - 1;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }

    k = num;

    for(i=num-1; i>=1; i--){
        for(j=1; j<=k; j++){
            document.write("&nbsp");
        }

        k = k + 1;

        for(j=1; j<=i; j++){
            document.write(j);
        }
        document.write("<br>");
    }
}

right_angled_triangle(6);
