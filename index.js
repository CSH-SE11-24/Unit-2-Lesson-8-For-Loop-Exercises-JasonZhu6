// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.
for (let num = 1; num <= 10; num++) {
  console.log(num)
}

// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.
for (let odd = 15; odd <= 40; odd += 2) {
  console.log(odd)
}

// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.
let sum = 0

for (let counter = 10; counter <= 20; counter++) {
  sum = sum + counter
}
console.log(sum)

// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.
let array = [1, 2, 3, 4, 5]

for (let index = 0; index < array.length; index++) {
  console.log(array[index])
}

// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.
let sum2 = 0

for (let index2 = 0; index2 < array.length; index2++) {
  sum2 = sum2 + array[index2]
}
console.log(sum2)

// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2
let array2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 5, 7, 8, 9]
let user = parseInt(prompt("Enter a number: "))
let times = 0

for (let index3 = 0; index3 < array2.length; index3++) {
  if (user == array2[index3]) {
    times++
  }
}
console.log(`The number ${user} occurs ${times} times. `)
