const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// ANTES DE ES6
// var email = person.email;
// var firstAnimal = animals[0];
// console.log(email);
// console.log(firstAnimal);

// DESPUÉS DE ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// console.log(firstAnimal);

// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
console.log(person);
console.log(animals);