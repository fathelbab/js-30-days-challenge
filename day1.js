//Write a function createHelloWorld. 
//It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function() {
        return "Hello World";
    }
    }

const helloWorld = createHelloWorld();
console.log(helloWorld()); // "Hello World"

// closure example

// function Adder(x){
//     return function (y) {
//         return x+ y;
//     }
// }


// const Add5 = Adder(5);
// const Add10 = Adder(10);


// console.log(Add5(2), Add10(2))