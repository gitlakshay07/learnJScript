// 1. What is JavaScript?

//  JavaScript is a high-level, interpreted programming language primarily used for
//  creating interactive and dynamic content on webpages. It's commonly used for 
//  client-side scripting in web development.

// 2.  What are the primitive data types in JavaScript?

// String: Represents a sequence of characters.
// Number: Represents numeric values, both integers and floating-point numbers.
// Boolean: Represents a logical value, either true or false.
// Undefined: Represents a variable that has been declared but not assigned a value.
// Null: Represents the intentional absence of any object value.
// Symbol: Represents unique identifiers, introduced in ECMAScript 6 (ES6).

// 3. How would you explain the concept of undefined in JavaScript?

// In JavaScript, undefined is a primitive data type that represents the absence of a value. It typically indicates that a variable has been declared but has not been assigned a value, or a function has been invoked without providing a return value explicitly. It's also the default value of uninitialized variables. Essentially, it signifies the lack of a meaningful value.

// 4.  What is null in JavaScript?

// represents the intentional absence of any object value. It's often used to signify that a variable intentionally does not contain any value or that a value is explicitly set to "nothing".

// 5.  How can you differentiate null from undefined?

// null is a value that must be assigned explicitly.
// undefined usually indicates an unintentional absence of value or a variable that has not been initialized.

// 6.What is NaN? How can you check if a value is NaN?

// It is a special value returned by operations that involve arithmetic calculations where the result is not a valid number. 

// To check if a value is NaN, you can use the isNaN() function. However, it's important to note that isNaN() converts its argument to a number before determining if it's NaN. So, if the argument is not already of the number type, it will be coerced into one

// isNaN(NaN); // true
// isNaN("Hello"); // true, because converting "Hello" to a number results in NaN
// isNaN(42); // false, because 42 is a valid number


// 7. Explain variable hoisting.

//variable declarations are moved to the top of their containing scope during the compilation phase, regardless of where the actual declaration appears in the code.

// 8. What is the difference between let, const, and var?

// Variables declared with var are hoisted to the top of their containing function or global scope.
// Can be redeclared and reassigned.

// Variables declared with let are hoisted to the top of their block scope, but they are not initialized until their declaration is encountered during execution.
// Cannot be redeclared within the same scope, but can be reassigned.

// Cannot be redeclared or reassigned. However, if the value is an object or array, its properties or elements can still be modified.

// 9. What is an Immediately Invoked Function Expression (IIFE)?

// JavaScript design pattern where a function is defined and immediately invoked within the same expression. This pattern is often used to create a new scope and prevent pollution of the global namespace.

// 10. How can you explain closures in JavaScript?

// a closure is formed when a function is defined within another function (the outer function) and the inner function maintains access to the variables and parameters of the outer function, even after the outer function has finished executing.

// 11. What is the this keyword? How does it work?

// represents the object that owns or invokes the function,

// 12. How does bind(), call(), and apply() work?

// 13. What is the prototype chain?

// 14.  How can you explain event delegation?

// 15. What are JavaScript Promises?

// 16.  How do you handle errors in JavaScript?

// 17. How does the Event Loop work in JavaScript?

// 18.What is the difference between == and ===?

// == (Abstract Equality Operator):

// Checks for equality after performing type conversion if the operands are of different types.
// It may not consider the types of operands strictly, leading to unexpected results.

// === (Strict Equality Operator):

// Checks for equality without type conversion. It compares both value and type.
// Ensures that both operands are of the same type before making the comparison.

// 19. How can you explain the importance of the use strict directive?

// "use strict" helps developers write safer, more efficient, and easier-to-debug JavaScript code
//  by enforcing a stricter set of rules and encouraging best practices

// 20. How would you explain the concept of Callback Hell or Pyramid of Doom?

// 21. How do you avoid Callback Hell?

// 22. What is a callback function?

// 23. Can you explain how map, reduce, and filter methods work?

// 24. What is a closure? Can you give a practical example?

// A closure is a fundamental concept in JavaScript where a function retains access to its lexical scope even after the outer function has finished executing. In simpler terms, a closure allows a function to "remember" and access variables from its parent scope, even when that parent scope is no longer active.

// 25.  How do you clone an object in JavaScript?

// 26. Can you explain how to create and use JavaScript Promises?

// 27.How does JavaScript handle asynchronous operations?

// 28. What distinguishes a function expression from a function declaration?

// 29.  How can you explain the Document Object Model (DOM)?

// 30. How do you select an element in the DOM?

// 31.What is the difference between innerHTML and textContent?

// 32. 

// 33. 

// 34. How do you add or remove a class from an element in the DOM?

// 35. How would you explain event bubbling and event capturing?

// 36. What is the purpose of the data-* attribute?

// 37. How do you create a new element and add it to the DOM?

// 38. How do you attach an event handler to a DOM element?

// 39. How can you prevent the default behavior in an event handler?

// 40. How would you explain the importance of document.ready in jQuery?

// 41. Can you explain the concept of shadow DOM?

// 42. What is a JavaScript generator and how is it different from a regular function?

// 43. What is a Proxy in JavaScript?

// 44. How does JavaScript's async and await work?

// 45. Can you explain JavaScript's Module pattern?

// 46. What is a Service Worker and what is it used for?

// 47. What is a Web Worker?

// 48. How can you explain the concept of memoization?

// 49. How do you handle state management in large applications?

// 50. What are the advantages and disadvantages of using JavaScript frameworks/libraries like React or Angular?

// 51. What are template literals in ES6?

// 52. Can you explain the spread and rest operators?

// 53. What are arrow functions? How are they different from regular functions?

// 54. How can you explain destructuring assignment?

// 55. What are default parameters in ES6?

// 56. How would you explain the import and export statements in ES6 modules?

// 57. What are JavaScript Symbols?

// 58. What is the concept of iteration in ES6? 59. What are JavaScript Sets and Maps?

// 60. What is async functions in ES2017?

// 61. What is the Virtual DOM in React?

// 62. How can you explain the difference between state and props in React?

// 63. How does Angular's two-way data binding work?

// 64. What is the difference between Angular and React?

// 65. How can you explain the concept of a hook in React?

// 66. How do you handle state management in React?

// 67. What is Vue.js and how is it different from React and Angular?

// 68. How would you explain the concept of a service in Angular?

// 69. What is Redux and how does it work?

// 70. What is the purpose of a reducer in Redux?

// 71. How can you explain the concept of the Critical Rendering Path?

// 72. What are the different ways to include JavaScript in HTML?

// 73. What are Progressive Web Apps (PWAs)?

// 74. How can the performance of a JavaScript application be improved?

// 75. How can you explain the concept of Lazy Loading?

// 76. How do you ensure that your JavaScript code is cross-browser compatible?

// 77. How do you debug JavaScript code?

// 78. What are the common performance bottlenecks in JavaScript

// applications?

// 79. What is the importance of Webpack in modern web development?

// 80. How can you explain the concept of tree shaking?

// 81. What is unit testing in JavaScript?

// 82. How do you perform testing in JavaScript?

// 83. What are some JavaScript testing libraries/frameworks?

// 84. What is Test-Driven Development (TDD)?

// 85. Explain the concept of mocking in testing?

// 86. What is the difference between end-to-end testing and unit testing?

// 87. What is the importance of code linting?

// 88. How do you ensure that your JavaScript code follows coding

// standards?

// 89. What is the importance of Continuous Integration (CI) and Continuous Deployment (CD) in software development?

// 90. What are the key principles of writing clean code?

// 91. Write a function to reverse a string.

// 92. How would you find the first non-repeating character in a string?

// 93. How can you write a function to determine if a string is a palindrome?

// 94. How would you merge two sorted arrays?

// 95. How to write a function to implement a debounce?

// 96. How to implement a basic version of Promise?

// 97. How to write a function to deep clone an object?

// 98. How to implement a function to perform a binary search on a sorted array?

// 99. How would you implement a basic pub-sub system?

// 100. How can you write a function to calculate the Fibonacci sequence?