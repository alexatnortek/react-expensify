import { resolve } from "upath";
import { setTimeout } from "core-js";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Alex',
      age: 60
    });
    // reject('Something went wrong!');
  }, 5000);

});

console.log('before');

promise.then(data => {
  console.log('1', data);
  // return 'some data';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({
      //   name: 'Alex',
      //   age: 60
      // });
      resolve('this is my other promise');
      // reject('Something went wrong!');
    }, 5000);

  });
}).then((str) => {
  console.log('does this run?', str);
}).catch(err => {
  console.log('error: ', err);
});

console.log('after');
