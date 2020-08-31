function sum() {
    total = 0 
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

function sum(...sumArgs) {
    total = 0
    for (i = 0; i < sumArgs.length; i++) {
        total  += sumArgs[i]
    }
    return total
}

sum(1, 2, 3, 4) === 10;
sum(1, 2, 3, 4, 5) === 15;


Function.prototype.myBind = function(context) {
    const that = this; // creates that to maintain "this relationship"
    const args1 = Array.from(arguments).slice(1) // make an array of all arguments except context
    return function _myBind() { // make the subfunction to contain the scope
        const args2 = Array.from(arguments)
        return that.apply(context, args1.concat(args2)) // uses the method on the different object
    }

}

// when writing this method with the args already spearated, creates the arrays for me with
// ...bindArgs and ...callArgs
Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function (...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs)); // uses the method on the different object

    }

}

// TEST
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(numArgs) {
    numbers = [];
    function _curriedSum (number) {
        numbers.push(number)
        if (numbers.length === numArgs) {
            sum = 0
            for (i = 0; i < numbers.length; i++) {
                sum += numbers[i]
            } 
            return sum;
        } else {
            return _curriedSum()
        }
    }
    return _curriedSum();

}

// test 
const sum = curriedSum(4)
sum(5)(30)(20)(1)