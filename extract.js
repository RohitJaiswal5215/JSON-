
function extractAndReverse(array) {
    const subarray = array.slice(2, 5)
    
    const reversedSubarray = subarray.reverse()
   
    return reversedSubarray
}


const array = [15, 30, 45, 60, 75, 90]
const result = extractAndReverse(array)
console.log(result)
