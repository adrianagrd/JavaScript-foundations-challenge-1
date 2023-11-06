/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

console.log("Select an option: ");
console.log("1. Even numbers between 10 and 40");
console.log("2. Odd numbers between 10 and 40");

switch ("Enter your option: ") {
  case "1":
    evenNumbers();
    break;
  case "2":
    oddNumbers();
    break;
}

function evenNumbers() {
  //even numbers
  for (let number = 10; number <= 40; number++) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

function oddNumbers() {
  //odd numbers
  for (let number = 10; number <= 40; number++) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
}
