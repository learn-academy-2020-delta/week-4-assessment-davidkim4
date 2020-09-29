// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

//Create a function that takes in 1 array argument.
const drawAndShuffle = (arr) => {
    //Use the shift method to remove the first index value from the arr argument.
    arr.shift()
    //Use an if statement to check to see if the arr length is not equal to 0/empty.
    if (arr.length !== 0) {
        //If the condition is true (if there IS at least one value inside the arr argument), then return the arr with the rest of the index values shuffled randomly using the .sort method. This particular .sort method uses a custom compare function. This means that it compares a and b, which are any two index values from the arr arguement, but in this case we are not modifying the values itself. We are instead returning a random float between -0.5 and 0.5. If the random float is negative, it sorts a to be lower than b and vice versa.    
        return newArr = arr.sort(function (a, b) {
            return 0.5 - Math.random()
        })
    }
    else {
        //If the if condition is false, the function will then return a string that states the array is empty.
        return 'The array is empty'
    }
}

console.log(drawAndShuffle(collections))
console.log(drawAndShuffle(collections))
console.log(drawAndShuffle(collections))
console.log(drawAndShuffle(collections))
console.log(drawAndShuffle(collections))





// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//Create a function that takes in 1 array argument.
const cubedSum = (arr) => {
    //Initialize a local variable called "sum" and set it to 0 so that when we call on this function, it resets the value of sum.
    let sum = 0
    //Use a for loop to loop through the entire arr length.
    for (i = 0; i < arr.length; i++) {
        //For each item in the array, add the cubed value of each item into sum.
        sum += arr[i] ** 3
    }
    //Return the total sum of cubed items.
    return sum
}
console.log(cubedSum(cubeAndSum1));
console.log(cubedSum(cubeAndSum2));




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//Create a function that takes in 1 array argument.
const minMax = (arr) => {
    //Initialize a local variable called "newArr" and set it to empty so that when we call on this function, it empties newArr.
    let newArr = []
    //Find the smallest value in the arr argument using Math.min.apply() and this largest value in the arr argument using Math.max.apply(). This mehod will use .min to find the smallest value in an list of numbers (CANNOT TAKE IN AN ARRAY), .apply is a convenient way to pass in an array and applies the .min method onto the second argument. We do not use the first argument in .apply because there is no given 'this.' object. .min/.max does not use 'this.' so we set it to null. After finding the smallest and largest value, we push those values into newArr in order by pushing the smallest value first then the largest.
    newArr.push(Math.min.apply(null, arr))
    newArr.push(Math.max.apply(null, arr))
    //Return newArr with its 2 values.
    return newArr
}
console.log(minMax(nums1));
console.log(minMax(nums2));



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//Create a function that takes in 1 string argument.
const reverseCap = (string) => {
    //Returns the string argument after each letter is split into an array, and then uses .map for each value and keeps track of each index. For each value, we use a ternary operator to check to see if the index is an odd number. If true, it will capitalize that value, if false it will keep it lower case. After checking each letter, it will then join the array back into a string.
    return string.split("").map((value, index) => index % 2 === 1 ? value.toUpperCase() : value).join("")
}
console.log(reverseCap(testString1));
console.log(reverseCap(testString2));




// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//Create a function that takes in 2 array arguments.
const singleUniqueArr = (arr1, arr2) => {
    //Initialize a new array that concatenates arr2 to arr1.
    let uniqueArr = arr1.concat(arr2)
    //Filters through uniqueArr that loops through the values and keeps track of index. If the index of a value is strictly equal to that index then it keeps the value in the array. If the loop encounters the same value with a different index from the index we already strictly equaled it to the first time, it knows that it is a duplicate and will not return the value.
    return uniqueArr.filter((value, index) => uniqueArr.indexOf(value) === index)
}
console.log(singleUniqueArr(arr1, arr2))



// --------------------5 STRETCH)

var arr3 = [3, 7, 10, 5, 4, 3, 3]
var arr4 = [7, 8, 2, 3, 1, 5, 4]
var arr5 = [4, 134, 5, 436, 562, 3, 23]

//Create a function that takes in any number of array arguments using spread operator.
const singleUniqueArrStretch = (...arr) => {
    //Initialize a local variable called "newArr" and set it to empty so that when we call on this function, it empties newArr.
    let newArr = []
    //Set the empty newArr variable to itself after concatenating all the arr arguments.
    newArr = newArr.concat(...arr)
    //Filters through uniqueArr that loops through the values and keeps track of index. If the index of a value is strictly equal to that index then it keeps the value in the array. If the loop encounters the same value with a different index from the index we already strictly equaled it to the first time, it knows that it is a duplicate and will not return the value.
    return newArr.filter((value, index) => newArr.indexOf(value) === index)
}
console.log(singleUniqueArrStretch(arr3, arr4, arr5))