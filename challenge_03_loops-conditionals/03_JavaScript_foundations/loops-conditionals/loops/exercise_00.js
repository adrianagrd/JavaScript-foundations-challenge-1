/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

print("Select an option: ");
print("1. Even numbers between 10 and 40");
print("2. Odd numbers between 10 and 40");

switch (prompt("Enter your choice: ")) {
  case "1":
    evenNumbers();
    break;
  case "2":
    oddNumbers();
    break;
}

//even numbers
for (let i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//odd numbers
for (let i = 10; i <= 40; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
