var arr = [234, 43, 55, 63, 5, 6, 235, 547];
function insertionSort(arr, n) {
    if (n === void 0) { n = arr.length; }
    var temp; // phần tử đầu trong mảng chưa sắp xếp
    var j; // vị trí bắt đầu xét
    for (var i = 0; i < n; i++) {
        temp = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
console.log(insertionSort(arr));
