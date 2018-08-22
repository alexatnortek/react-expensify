// import * as firebase from 'firebase';

import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added  -- gets called for existing children also not just for added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// monitor for changes
// database
//   .ref("expenses")
//   .on("value", snapshot => {
//     // console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, e => {
//     console.log('Error on fetching data: ', e);
//   });

// print out database content once
// database.ref('expenses').once('value').then(snapshot => {
//   // console.log(snapshot.val());
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// })

// database.ref('expenses').push({
//   description: 'One',
//   note: 'food',
//   amount: 25,
//   createdAt: 10
// })

// database.ref('expenses').push({
//   description: 'Two',
//   note: 'gas',
//   amount: 100,
//   createdAt: 20
// })

// database.ref('expenses').push({
//   description: 'Three',
//   note: 'water',
//   amount: 10,
//   createdAt: 30
// })


// database.ref("notes/-LK0BIJYFSFL4iEYytBS").update({
//   body: 'Take it easy'
// });

// const notes = [
//   {
//     id: '12',
//     title: "First note",
//     body: "This is my first note"
//   },
//   {
//     id: '1234as',
//     title: "Another note",
//     body: "This is my second note"
//   }
// ];

// const firebaseNotes = {
//   notes: {
//     asfsf: {
//       title: "First note",
//       body: "This is my first note"
//     },
//     aerorou: {
//       title: "Another note",
//       body: "This is my second note"
//     }
//   }
// }

// database.ref('notes').set(notes);

// database.ref('notes').push({
//   title: 'Course study',
//   body: 'React, Javascript, Node JS'
// });

// fetching all database data one time only
// database.ref().once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch( e => {
//   console.log('Error fetching data: ', e);
// });

// get data when it changes using callback function -- cannot be a promise because 
// promise runs only once and can be resolved or rejected 
// const onValueChange = database.ref().on('value', (snapshot) => {
//   // console.log(snapshot.val());
//   console.log(`${snapshot.val().name} is ${snapshot.val().job.title} at ${snapshot.val().job.company}.`)
// }, e => {
//   console.log('Error with data fetching: ', e);
// });

// setTimeout(() => {
//   database.ref('name').set('Dude');
// }, 5000);

// setTimeout(() => {
//   // database.ref().update({
//   //   age: 30
//   // })
//   database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//   // database.ref().update({
//   //   age: 30
//   // })
//   // database.ref("age").set(28);
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   // database.ref().update({
//   //   age: 30
//   // })
//   database.ref("age").set(31);
// }, 10500);



// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch(e => {
//   console.log('Error: ', e);
// })

// firebase.database().ref().set({
// database.ref().set({
//   name: 'Alex Dude',
//   age: 59,
//   stressLevel: 6,
//   job: {
//     title: 'QA',
//     company: 'Nortek'
//   },
//   isSingle: true,
//   location: {
//     city: 'Seattle',
//     state: 'WA',
//     country: 'US'
//   } 
// }).then(() => {
//   console.log('data is saved');
// }).catch( e => {
//   console.log('saving of data failed', e);
// });

// database.ref().set('This is my database');

// database.ref('age').set(60);
// database.ref('location/city').set('Tacoma');

// database.ref('attributes').set({
//   height: 70,
//   weight: 200
// }).then(() => {
//   console.log('attributes were saved!');
// }).catch((e) => {
//   console.log('attributes failed to be saved!', e);
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('removed!');
// }).catch(e => {
//   console.log('remove failed!', e);
// });

// database.ref().update({
//   name: 'Nicky',
//   age: 26,
//   job: {
//     title: 'DJ',
//     company: 'Pussi'
//   },
//   isSingle: null,
//   'location/city': 'Capitol Hill',
//   stressLevel: 9
// })
