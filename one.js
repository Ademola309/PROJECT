// Calculate the sum of numbers within an array

function sumOfNumbers (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
     sum += num[i];
    }
    return sum;
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(sumOfNumbers(numbers));
