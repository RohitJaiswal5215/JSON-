function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0)
}

function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}

function sortAndConcat(arr1, arr2) {
    const Arr1 = arr1.sort((a, b) => a - b)
    const Arr2 = arr2.sort((a, b) => a - b)
    return Arr1.concat(Arr2)
}


const array1 = [1, 6, 8, 55, 10]
const array2 = [9, 65, 10, 7, 37]


const evenNumbers = filterEvenNumbers(array1)
console.log("even number is : " ,evenNumbers)

const sum = sumOfArray(array1)
console.log("sum is : ", sum)

const sortedAndConcatenated = sortAndConcat(array1, array2)
console.log("sorted and concatenated array is : " ,sortedAndConcatenated)
