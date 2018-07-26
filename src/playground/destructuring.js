// console.log('destructuring');

// //Object destructuring

// const person = {
//   name: 'Dude',
//   age: 60,
//   location: {
//     city: 'Seattle',
//     temperature: 81
//   }
// }


// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Ananimous', age } = person;
// const { city, temperature: temp } = person.location;
// console.log(`${firstName} is ${age}.`);

// console.log(`${city} is in ${temp}.`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Punguin'
//   }
// };

// const { name: publisheName = 'Self-Published' } = book.publisher;

// console.log(publisheName);

//Array destructuring

const address = ['3333 40th Ave West', 'Seattle', 'WA', '98199'];

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

console.log(`You are in ${address[1]}, ${address[2]}.`)

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}.`);
