# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
After reviewing this code, I saw that it is a conditional statement. A conditional statement allows your program to make decisions based on whether something is true or false. You can use if, else, and else if to handle multiple situations. These statements control the flow of your code.

In the code we reviewed, I think the issue might be with the use of the let statements. I believe they should be console.log statements instead, because let is used to store or change values, while console.log is used to print messages. So to fix this code, I think we should replace the let statements with console.log to properly print the output.


### Question 2
The following code logs "Michael Jordan" because objects are stored by reference and not by value. When the Goat is set equal to the best player, both variables essentially refer to the same object. changing the best player. name can also change the goat.name since they share the same reference, therefore it console. logs Michael Jordan.




### Question 3


### Question 4
 The purpose of rest parameters in JavaScript is to allow a function to accept any number of arguments. Usually, functions have a fixed number of parameters, but sometimes you don’t know how many values will be passed in. Rest parameters make it possible to handle an unlimited number of arguments easily by collecting them into a single array.

To turn a parameter into a rest parameter, you simply add three dots (...) before its name in the function definition. For example, if you write:
```
function example(...values) { }
```
then inside the function, values will act like an array holding all the arguments that were passed in. You can then use methods such as array methods like .reduce() to work with those values.
```
const sum = (...numbers) => {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(4, 8, 12, 16)); // 40
```
This function shows how ...numbers gathers all of the arguments into an array. The loop then adds them together to produce the output. This also demonstrates how flexible rest parameters make functions.
### Question 5
A scope  defines where variables can be accessed in your code. Variables declared inside a function are only visible inside that function. Those declared outside are in the global scope and can be accessed anywhere. This helps prevent name conflicts and accidental overwrites.

You can think of scope like rooms in a house a variable created inside a room (a function) can only be used their. Not in other rooms. But a global variable is like something in the living room everyone in the house can see and use it. 

Let house = “living room”; 
Function room() {
Let item = “bed”;
console.log(item);

Item only exists inside the function just like one thing kept in one of the rooms cant be used in another


### Question 6
A module is a separate file of code that can be reused in other files.This keeps your programs organized and prevents code repetition.
 You use module.exports to share code and require() to import it.Node.js uses this system to make code modular and maintainable. And modules help keep your code more oraganized reusable and easier to maintain. They also help prevent many conflicts because each module has its own scope. And you can reuse the same module in different projects without rewriting code. module . exports shares code from one file and .require() brings that code into an other file. This makes your project more organized and easier to manage 



### Question 7
after this code runs the fruit array will still hold the same [apple, bannana, cheery, date] while fruitMinusOne will hold ['apple, bannana, 'cherry']. because the function removelastpurely creates a copy of the original array using the spread operator (const arrCopy = [...arr];) before moving thr last thing with .pop.

it is necessary to mske a copy of the array to keep the function pure.A pure function does not chasnge or "mutate" its input and always prduces the same output for the same input. if the function used .pop() on the original array it would permanatley remove the last element from fruits which would make that function impure.

avoiding mutation is important because it keeps your code predictable and easier to debug when you dont change the original data. you prevent unexpected side effects and make your program more eaier to maintain.


### Question 8
* I would use objects to represent a single item in the cart because an objects can store multiple related pieces of info together. like the items name the price the quantity and etc. each property in an object can describe one detail about the item.

* I would use an array to represent the shopping cart because a cart usually contains multiple items and arrays are created to hold lists of data

*const shoopingCart = [
    {name:"laptop", price: 1200.99, quantity: 1}
    {name:"headPhones", price: 200.00, quantity: 1}
    {name:"phone", price: 1399.99, quantity: 1}

]
this example shows how each product is in an object, and all the objects are stored inside the shoppingCart array. this structures makes it easy to loop through items, update quantities, and calculate the total price by multyplying eachothers price and quantity.

