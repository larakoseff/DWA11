import createStore from "./model/store.js";
import reducer from "./model/reducers.js";
import { add, subtract, reset } from "./model/actions.js";

const elements = {
  number: document.querySelector('[data-key="number"]'),
  subtract: document.querySelector('[data-key="subtract"]'),
  add: document.querySelector('[data-key="add"]'),
  reset: document.querySelector("[data-button]"),
};

const subtractHandler = () => {
  store.dispatch(subtract());
};

const addHandler = () => {
  store.dispatch(add());
};

const resetHandler = () => {
  store.dispatch(reset());
};

elements.subtract.addEventListener("click", subtractHandler);
elements.add.addEventListener("click", addHandler);
elements.reset.addEventListener("click", resetHandler);

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  const newValue = store.getState();
  elements.number.value = newValue;

  if (elements.add.disabled === true && newValue < MAX_NUMBER) {
    elements.add.disabled = false;
  }

  if (elements.subtract.disabled === true && newValue > MIN_NUMBER) {
    elements.subtract.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    elements.subtract.disabled = true;
  }

  if (newValue >= MAX_NUMBER) {
    elements.add.disabled = true;
  }
});

console.log(newValue);
