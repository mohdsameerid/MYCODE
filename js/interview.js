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