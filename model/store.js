const createStore = (reducer) => {
  let state = 0;
  const subscribers = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach((subscriber) => subscriber());
  };

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  };

  return { getState, dispatch, subscribe };
};

const MAX_NUMBER = 100;
const MIN_NUMBER = -100;
const STEP_AMOUNT = 1;

export default createStore;
