console.log('in main.js');

var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};

var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age:29
};

var person3 = {
  firstName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};

var people = [ person1, person2, person3 ];
for (var i = 0; i < people.length ; i++ ) {
  console.log(people[i].firstName, people[i].age);
}


if ({} === {}) {
  console.log('yep that\'s right');
} else {
  console.log('That\'s not right')
};


if ({} == {}) {
  console.log('yep that\'s right');
} else {
  console.log('That\'s not right')
};

//It's not right because {} is shorthand for new object so in this case we have two new different object.
//Everytime you put this {} it's a different new object

var p = {};
p.firstName = 'Fred',
p.lastName = 'Flinstone';

//Can add a new object like this but Matt wouldn't recommend it causes its less cleaner

//FUNCTION

console.log ('---Functions');

function createPerson (firstName, lastName, email, age) {
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age
  };

  return newPerson;
}
//Can only return it within the bracket it cannot go outside the newPerson curly brackets. That is called scope


var harald = createPerson('Harald','Kumar', 'h.kumar@example.com',15);
console.log ('newPerson:', harald);

function isOldEnough (age) {
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log ('come in');
} else {
  console.log ('come back when you\'re older');
};
