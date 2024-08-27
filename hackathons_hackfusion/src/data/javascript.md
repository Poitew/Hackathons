# JavaScript
&nbsp;

JavaScript (JS) is a **programming language** that allows you to implement complex things on web pages. While HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. It was created by Brendan Eich in 1995 and has since become one of the most popular programming languages in the world.

---
&nbsp;

# The Basics
&nbsp;

JavaScript is versatile and can be used for a variety of tasks, including:

1. **Manipulating HTML and CSS**: You can change the content, structure, and styling of web pages dynamically.
2. **Handling events**: You can respond to user actions like clicks, mouse movements, and keystrokes.
3. **Storing and managing data**: You can work with data using variables and data structures like arrays and objects.
4. **Communicating with servers**: You can fetch data from servers, send data, and update the page without reloading.

## Including JavaScript in HTML

There are multiple ways to include JavaScript in an HTML document:

&nbsp;

### **Inline JavaScript**
You can write JavaScript code directly within an HTML tag using the `onclick` attribute, or any other event-based attribute.

```html
    <button onclick="alert('Hello, World!')">Click Me!</button>
```

&nbsp;

### **Internal JavaScript**
You can place JavaScript code within a `<script>` tag inside the `<head>` or `<body>` section of your HTML document.

```html
    <script>
        alert('Hello, World!');
    </script>
```

&nbsp;

### **External JavaScript**
The most common way to include JavaScript is to link to an external file using the `<script>` tag with the `src` attribute.

```html
    <head>
        <script src="app.js"></script>
    </head>
```

In the `app.js` file, you can write:

```javascript
    alert('Hello, World!');
```

---
&nbsp;

# Variables
&nbsp;

Variables are used to store data. In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords.

- **`var`**: The old way of declaring variables, not commonly used anymore.
- **`let`**: A modern way to declare variables that can be reassigned.
- **`const`**: Used to declare variables that should not be reassigned.

```javascript
    var name = "John";
    let age = 25;
    const isStudent = true;
```

---
&nbsp;

# Data Types
&nbsp;

JavaScript supports various data types:

- **String**: A sequence of characters. `"Hello, World!"`
- **Number**: Any numerical value. `42`, `3.14`
- **Boolean**: Represents logical values. `true`, `false`
- **Array**: A list of values. `[1, 2, 3, 4, 5]`
- **Object**: A collection of key-value pairs. `{ name: "John", age: 25 }`
- **Null**: Represents an empty or non-existent value.
- **Undefined**: Represents a value that hasn't been assigned yet.

---
&nbsp;

# Operators
&nbsp;

Operators are used to perform operations on variables and values.

## **Arithmetic Operators**
```javascript
    let sum = 10 + 5;     // 15
    let difference = 10 - 5;  // 5
    let product = 10 * 5;  // 50
    let quotient = 10 / 5; // 2
    let remainder = 10 % 3; // 1
```

&nbsp;

## **Comparison Operators**
These operators return a Boolean value.

```javascript
    let isEqual = (10 == 10); // true
    let isNotEqual = (10 != 5); // true
    let isGreater = (10 > 5); // true
    let isLess = (10 < 15); // true
    let isGreaterOrEqual = (10 >= 10); // true
    let isLessOrEqual = (10 <= 5); // false
```

&nbsp;

## **Logical Operators**
```javascript
    let and = true && false; // false
    let or = true || false; // true
    let not = !true; // false
```

---
&nbsp;

# Functions
&nbsp;

Functions are blocks of code designed to perform a particular task. You can define a function using the `function` keyword.

```javascript
    function greet(name) {
        return "Hello, " + name + "!";
    }

    let message = greet("John");
    console.log(message); // Output: Hello, John!
```

You can also define functions using arrow function syntax (a more modern approach):

```javascript
    const greet = (name) => {
        return `Hello, ${name}!`;
    };

    console.log(greet("John")); // Output: Hello, John!
```

---
&nbsp;

# Conditionals
&nbsp;

Conditionals allow you to perform different actions based on different conditions.

&nbsp;

## **If-Else Statements**
```javascript
    let age = 18;

    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
```

&nbsp;

## **Switch Statements**
```javascript
    let day = "Monday";

    switch (day) {
        case "Monday":
            console.log("Start of the work week.");
            break;
        case "Friday":
            console.log("End of the work week.");
            break;
        default:
            console.log("It's just another day.");
    }
```

---
&nbsp;

# Loops
&nbsp;

Loops are used to repeatedly execute a block of code.

## **For Loop**
```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i); // Output: 0 1 2 3 4
    }
```
&nbsp;

## **While Loop**
```javascript
    let i = 0;
    while (i < 5) {
        console.log(i); // Output: 0 1 2 3 4
        i++;
    }
```

---
&nbsp;

# DOM Manipulation
&nbsp;

JavaScript can be used to manipulate the HTML Document Object Model (DOM). You can select elements, change their styles, attributes, and content.

&nbsp;

## **Selecting Elements**
```javascript
    let heading = document.querySelector('h1');
    let paragraphs = document.querySelectorAll('p');
```

&nbsp;

## **Changing Content**
```javascript
    heading.textContent = "New Heading!";
```

&nbsp;

## **Changing Styles**
```javascript
    heading.style.color = "blue";
```

&nbsp;

## **Adding Event Listeners**
You can make your web pages interactive by responding to user events like clicks, mouse movements, and key presses.

```javascript
    let button = document.querySelector('button');

    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
```

---
&nbsp;

# Exercise
&nbsp;

With the concepts you've learned, try to create a simple webpage that changes content when a button is clicked. Use JavaScript to add an event listener to the button, and change the text of a paragraph when the button is clicked.

**Challenge**: Create a page that has a button and a paragraph. When the button is clicked, change the paragraph text to "Hello, JavaScript!" and change the background color of the paragraph.

```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>JavaScript Exercise</title>
    </head>
    <body>
        <p id="text">Click the button to change this text.</p>
        <button id="changeTextButton">Change Text</button>

        <script>
            let button = document.getElementById('changeTextButton');
            let paragraph = document.getElementById('text');

            button.addEventListener('click', function() {
                paragraph.textContent = "Hello, JavaScript!";
                paragraph.style.backgroundColor = "lightblue";
            });
        </script>
    </body>
    </html>
```

---