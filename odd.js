const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfOddNumbers = 0;

for (let i = 0; i < array.length; i++) {
    //using if condition//
  if (array[i] % 2 !== 0) {
    sumOfOddNumbers += array[i];
  }
}

console.log(`The sum of odd numbers is: ${sumOfOddNumbers}`);
