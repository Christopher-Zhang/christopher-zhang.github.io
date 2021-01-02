function test(mode, arr, canvas){
    if(!Array.isArray(arr)) arr = gen(arr);
    console.log("before:\n");
    print(arr);
    switch(mode){
        case "insertion": 
            arr = insertionSort(arr);
            break;
        case "bubble":
            arr = bubbleSort(arr);
            break;
        case "merge":
            arr = mergeSort(arr);
            break;
        case "quick":
            arr = quickSort(arr);
            break;
        case "heap":
            arr = heapSort(arr);
            break;
        default:
            console.log("error");
    }

    
    console.log("after:\n");
    print(arr);
    draw(arr);
}

function print(list){
    console.log("[");
    for(x of list){
        console.log(x+", ");
    }
    console.log("]\n");

}


// function display(list,canvas){

// }