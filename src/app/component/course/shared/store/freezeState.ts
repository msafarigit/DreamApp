
// https://github.com/substack/deep-freeze
// https://github.com/immutable-js/immutable-js
// https://github.com/buunguyen/redux-freeze
function deepFreeze(obj) {
  Object.freeze(obj); // root props of object freezed!

  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj.hasOwnProperty(prop) && obj[prop] && typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}

export default function freezeState(store) {
  return next => action => {
    const result = next(action);
    const state = store.getState();

    deepFreeze(state);
    return result;
  }
}
