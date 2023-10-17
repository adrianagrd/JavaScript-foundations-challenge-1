# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a versatile programming language for web development. It enables dynamic and interactive web content. JavaScript runs in web browsers, enhancing user experiences. It's cross-platform, ensuring compatibility on various devices. With Node.js, it can also be used for server-side development. A rich ecosystem of libraries and frameworks simplifies web development.
```

## About values

```
To understand that we need to know how many different types of data type present in Javascript.
(Arrays do not belong to this list because they are objects as well.)

Now, these data types are broadly classified into 2 types:

· Primitive (immutables).
· Non-Primitive (mutables).
```

### What is a primitive value?

```
A primitive value in JavaScript is a data type that represents a single, immutable value. It is not an object and does not have methods or properties associated with it. So are those which cannot be modified after creation.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
1. Number: Represents numeric values.

    let age = 30;
    let temperature = -10.5;

2. String: Signifying textual data enclosed within single or double quotation marks. For example:

    let name = "John";
    let message = 'Hello, World!';

3. Boolean: Denoting binary true or false values. An example would be:

    let isTrue = true;
    let isFalse = false;

4. Undefined:  Indicating a variable that has been declared but lacks an assigned value. It can be demonstrated as:

    let data;
    let undefinedValue = undefined;

5. Null: Signifying a deliberate absence of any object value. It can be represented as:

    let empty = null;

6. Symbol: Symbolic values are unique and immutable, often used as object property keys. An example:

    const uniqueKey = Symbol('description');
```

## About variables

### What is a variable in JS?

```
In JavaScript, a variable serves as a named container for storing data, enabling the storage and retrieval of values or objects within the code.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
JavaScript offers three primary methods for declaring variables: "var," "let," and "const."

The most advisable approach is to use "let" and "const," as they implement block-scoping, while "var" is less recommended due to its function-scoping characteristics.
```

### Which are the most used var naming conventions in JS?

```
Commonly adopted variable naming conventions in JavaScript entail the utilization of camelCase, commencing with a lowercase letter. For example:

    let myVariable = "some value";
    let counterValue = 0;
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
1. == (Equality): Comparing two values for equality, with type coercion. Illustration:

    console.log(3 == "3");

2. === (Strict Equality): Comparing two values for equality without type coercion. Demonstrated as:

    console.log(3 === "3");

3. != (Inequality): Assessing two values for inequality, with type coercion. Example:

    console.log(3 != "2");

4. !== (Strict Inequality): Determining two values' inequality without type coercion. For instance:

    console.log(3 !== "3");

5. > (Greater Than): Assessing if the left operand is greater than the right operand. Shown as:

    console.log(5 > 3);

6. < (Less Than): Gauging whether the left operand is less than the right operand. An example:

    console.log(2 < 4);
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
1. && (Logical AND): This operator yields a true value only if both of its operands are true. Illustrated as:

    console.log(true && false);

2. || (Logical OR): Produces a true result if at least one of its operands is true. Exemplified as:

    console.log(true || false); // true

3. ! (Logical NOT): This operator inverts the value of its operand. An instance:

    console.log(!true); // false
```
