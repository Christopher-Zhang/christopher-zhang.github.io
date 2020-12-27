var MAX_VAL = 100;

/*
 * Returns an array of given length with values ranging from 0 to 99
 */
function gen(length){
    var arr = Array(length);
    for(let i = 0; i < length; i++){
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}