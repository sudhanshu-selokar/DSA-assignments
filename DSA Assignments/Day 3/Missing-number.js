function findMissingNumber(arr) {
    let n = arr.length + 1;  
    let expectedSum = n * (n + 1) / 2;  
    let actualSum = arr.reduce((sum, num) => sum + num, 0);  
    let missingNumber = expectedSum - actualSum;  
    return missingNumber;
}

let arr = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr));  