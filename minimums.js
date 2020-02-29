function sumOfMinimums(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        let minVal = arr[i];
        minVal.sort(function (a, b) {
            return a - b;
        })
        sum += minVal[0];
    }
    return sum;
}