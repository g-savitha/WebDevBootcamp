//Reverse an array;

var arr = [1, 2, 3, 4, 5, 6];

function printReverse(arr) {
    for (i = arr.length - 1; i > 0; i--) {
        console.log(arr[i]);
    }
}

//isUniform

var arr2 = [1, 1, 1, 1];

function isUniform(arr2) {
    var first = arr2[0];
    for (var i = 1; i < arr2.length; i++) {
        if (arr2[i] !== first) {
            return false;
        }
    }
    return true;
}

//sum array;
var sumArr = [1, 2, 3, 5];

function sumArray(sumArr) {
    for (i = 0; i < sumArr.length; i++) {
        var sum = 0;
        sum = sum + sumArr[i];
    }
    return sum;
}

function sumArray(sumArr) {
    var sum = 0;
    sumArr.forEach(function (element) {
        sum += element;
    });
    return sum;
}

//Max in an array

var arr3 = [1, 10, 9];

function findMax(arr3) {
    arr3.sort((a, b) => a - b);
    return arr3[length - 1];
}