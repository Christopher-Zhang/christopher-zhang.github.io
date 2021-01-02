function bubbleSort(list){
    var length = list.length;
    
    for(let i = 0; i < length-1; i++){
        for(let j = 0; j < length-i-1; j++){
            // draw(list);
            // setTimeout(drawBoth(list,j,j+1),10,list,j,j+1);
            if(list[j] > list[j+1]){
                var temp = list[j+1];
                list[j+1] = list[j];
                list[j] = temp;
                // setTimeout(drawBoth(list,j+1,j),10,list,j+1,j);
            }
        }
    }
    return list;
}

function insertionSort(list){
    var length = list.length;

    for(let i = 0; i < length; i++){
        var val = list[i];
        var j = i - 1;

        while(j >= 0 && val < list[j]){
            list[j+1] = list[j];
            j--;
        }
        list[j+1] = val;   
    }
    return list;
}

function mergeSort(list){
    function merge(list,start,mid,end){
        var start2 = mid+1;
        if(list[mid]<=list[start2]){
            return;
        }
        while(start <= mid && start2 <= end){
            if(list[start] <= list[start2]) start++;
            else{
                var val = list[start2];
                var index = start2;
                while(index != start){
                    list[index] = list[index-1];
                    index--;
                }
                list[start]=val;
                start++;
                start2++;
                mid++;
            }
        }
    }
    function sort(list,start,end){
        if(start < end){
            var mid = Math.floor((start + end-1)/2);
            sort(list,start,mid);
            sort(list,mid+1,end);

            merge(list,start,mid,end);
        }
    }
    sort(list,0,list.length-1);
    return list;
}

function quickSort(list){
    function sort(list, left, right){
        if(right-left < 1){
            return;
        }
        var pivot = partition(list,left,right);
        sort(list,left,pivot-1);
        sort(list,pivot+1,right);
    }
    function partition(list,left,right){
        var pivot = list[right];
        var li = left-1;
        for(let cur = left; cur < right; cur++){
            if(list[cur] < pivot){
                li++;
                var temp = list[li];
                list[li] = list[cur];
                list[cur] = temp;
            }
        }
        var temp = list[li+1];
        list[li+1] = list[right];
        list[right] = temp;
        return li+1;
    }


    sort(list,0,list.length-1);
    return list;
}

function heapSort(list){
    var length = list.length;
    for(let i = Math.floor(length/2)-1; i >= 0; i--){
        heapify(list, length, i);
    }
    for(let i = length - 1; i > 0; i--){
        let temp = list[0];
        list[0] = list[i];
        list[i] = temp;

        heapify(list,i,0);
    }

    function heapify(list, n, index){
        var max = index;
        var left = 2 * index + 1;
        var right = 2 * index + 2;

        if(left < n && list[left] > list[max]){
            max = left;
        }
        if(right < n && list[right] > list[max]){
            max = right;
        }
        if(max != index){
            let swap = list[index];
            list[index] = list[max];
            list[max] = swap;

            heapify(list,n,max);
        }
    }
    return list;
}


