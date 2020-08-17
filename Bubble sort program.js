// Sorting (Bubble Sort)

function bubble_sort(arr){
    let temp;

    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    for(i=0; i<arr.length; i++){
        document.write(arr[i] + "<br>");
    }
}


let a = [1, 3, 5, 6, 2, 4, 9, 8, 7, 10];


bubble_sort(a);
