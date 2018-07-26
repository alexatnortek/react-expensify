import { createStore } from "redux";

const add = ({a, b}, c) => {
  return a + b + c;
}
console.log(add({a:10, b: 20}, 100));

//Action generators

// const incrementCount = (payload = {}) => ({
//    type: 'INCREMENT',
//    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//   });

//same as from above 

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});


//Reducers

const countReducer = (state = { count: 0 }, action) => {

  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }

  // same below !!!
  // if (action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1
  //   }
  // } else {
  //   return state;
  // }
  // console.log('running');

};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store.getState());
// Actions!!
// store.dispatch(
// {
//   type: 'INCREMENT',
//   incrementBy: 5
// });

//same as from above

store.dispatch(incrementCount({ incrementBy: 5 }));

// console.log(store.getState());

// unsubscribe();

// store.dispatch(
//   {
//     type: 'INCREMENT'
//   });

store.dispatch(incrementCount());

// store.dispatch(
//   {
//     type: 'RESET'
//   });  

//same as above!!

store.dispatch(resetCount());
// store.dispatch(
//   {
//     type: 'DECREMENT',
//     decrimentBy: 10
//   });

  //same as from above

store.dispatch(decrementCount({decrementBy: 10}))  

// store.dispatch(
//   {
//     type: 'DECREMENT'
//   });

//same as from above

store.dispatch(decrementCount());  

// store.dispatch(
//   {
//     type: 'SET',
//     count: 101
//   });

store.dispatch(setCount({count: 102}));  
// console.log(store.getState());