// create a function that filters out negative numbers

function filterNumber (arr) {
 return arr.filter (num => num >= 0);
}
let number = [1,2,3,4,-1,-4,-6,-7,12,46,-67,8]
console.log(filterNumber(number))


  