/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

console.log("Select an option: ");
console.log("1. Even numbers between 10 and 40");
console.log("2. Odd numbers between 10 and 40");

switch ("Enter your choice: ") {
    case "1":
        evenNumbers();
        break;
    case "2":
        oddNumbers();
        break;
}

function evenNumbers() {
    //even numbers
    let i = 10;
    while (i <= 40) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}

function oddNumbers() {
    //odd numbers
    i = 10;
    while (i <= 40) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}
