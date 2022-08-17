// / < --------------Question 1----------------->
// What is the output ?
let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
}
 else {
  console.log("Yay it's a string!");
}

// A: It's not a string!
// B: Yay it's a string!   
// C: TypeError
// D: undefined


// // < --------------Question 2----------------->
// What is the output ?
const user = {
        email: "my@email.com",
        updateEmail: function (email){
                this.email = email
        }
}

user.updateEmail("new@email.com")
console.log(user.email)

// A: my@email.com
// B: new@email.com
// C: undefined
// D: ReferenceError

// // < --------------Question 3----------------->
// What is the output ?
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)

// A: ['🍌', '🍊', '🍎']
// B: ['🍊', '🍎']
// C: ['🍇', '🍊', '🍎']
// D: ['🍇', '🍌', '🍊', '🍎']

// // < --------------Question 4----------------->
// What is the output ?
let count = 0;
const nums = [10, 11, 12, 13];
for(var i in nums){
        if (i)
         {   count += 1
           console.log(i);
          }   
}

console.log(count)

// A: 1
// B: 2
// C: 3
// D: 4

// // < --------------Question 5----------------->
// Which of the options result(s) in an error?

const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

 emojis.push('🦌');
 emojis.splice(0, 2);
 emojis = [...emojis, '🥂'];
 emojis.length = 0;

 console.log(emojis);

// A: 1
// B: 1 and 2
// C: 3 and 4
// D: 3

// // < --------------Question 6----------------->
// // for this ques read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

const add = function (x) {
    return x + x;
}

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);

// A: 2 4 and 3 6
// B: 2 NaN and 3 NaN
// C: 2 Error and 3 6
// D: 2 4 and 3 Error

// // < --------------Question 7----------------->

// // for this question google what Object.freeze does

// Which of the following will modify the person object?
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);

// A: person.name = "Suresh"
// B: delete person.address
// C: person.address.street = "101 Main St"
// D: person.pet = { name: "Mara" }

// // < --------------Question 8----------------->

// // for this question google what Object.seal does
// Which of the following will modify the person object?
const person1 = { name: 'Lydia Hallie' };

Object.seal(person1);

// A: person.name = "Evan Bacon"
// B: person.age = 21
// C: delete person.name
// D: Object.assign(person, { age: 21 })


// // < --------------Question 9----------------->
// // read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// What is the output ?
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));

// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']

// // < --------------Question 10----------------->

// What is the output ?
var randomVal = 21;
function getInfo() {
  console.log(typeof randomVal);
  var randomValue = 'Lydia Hallie';
  lo
}

getInfo();

// A: "number"
// B: "string"
// C: undefined
// D: ReferenceError

// // < --------------Question 11----------------->

// What is the output ?
const add1 = function (x) {
    function inner (y) {
        function innermost (z) {
            console.log(x, y, z);
            return x + y + z;
        }
        innermost(6);
    }
    inner(5);
}

add1(4);

// A: 4 5 6
// B: 6 5 4
// C: 4 function function
// D: undefined undefined 6

// // < --------------Question 12----------------->
// // read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

// What is the output ?
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
console.log('We have to buy bananas!');
} else {
console.log(`We don't have to buy bananas!`);
}

// A: We have to buy bananas!
// B: We don't have to buy bananas
// C: undefined
// D: 1

// // < --------------Question 13----------------->
// // read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// What is the output ?
const person2 = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person2.pet?.name);
console.log(person2.pet?.family?.name);
console.log(person2.getFullName?.());
console.log(member.getLastName?.());

// A: undefined undefined undefined undefined
// B: Mara undefined Lydia Hallie ReferenceError
// C: Mara null Lydia Hallie null
// D: null ReferenceError null ReferenceError

// // < --------------Question 14----------------->

let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);
// A: 🤠
// B: 🥰
// C: SyntaxError
// D: ReferenceError

// // < --------------Question 15----------------->
// // read:https://www.w3schools.com/react/react_es6_spread.asp
// Which function call is correct ?

function sumValues(x, y, z) {
  return x + y + z;
}
// A: sumValues([...1, 2, 3])
// B: sumValues([...[1, 2, 3]])
// C: sumValues(...[1, 2, 3])
// D: sumValues([1, 2, 3])

// // < --------------Question 16----------------->
// // revise default paramters and spread operator
const person3 = {
  name: 'Lydia',
  age: 21,
};

const changeAge = function (x = { ...person3 }) {
  x.age += 1;
}
const changeAgeAndName = function (x = { ...person3 }) {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person3);
changeAgeAndName();

console.log(person3);

// A: {name: "Sarah", age: 22}
// B: {name: "Sarah", age: 23}
// C: {name: "Lydia", age: 22}
// D: { name: "Lydia", age: 23 }

// // < --------------Question 17----------------->

// What is the output ?
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
// A: ['🍕', '🍫', '🥑', '🍔']
// B: ['🍝', '🍫', '🥑', '🍔']
// C: ['🍝', '🍕', '🍫', '🥑', '🍔']
// D: ReferenceError

// // < --------------Question 18----------------->

// What is the output ?
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[i]);
// A: true
// B: false
// C: undefined
// D: TypeError

// // < --------------Question 19----------------->
// What is the output ?

function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

// A: a is bigger, 6 and b is bigger, 3
// B: a is bigger, undefined and b is bigger, undefined
// C: undefined and undefined
// D: SyntaxError

// // < --------------Question 20----------------->
// // read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// What is the output ?
const person4 = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person4)) {
  console.log(x, y);
}
// A: name Lydia and age 21
// B: ["name", "Lydia"] and ["age", 21]
// C: ["name", "age"] and undefined
// D: Error