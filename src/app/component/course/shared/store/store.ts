import { createStore, Action, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';

// after install redux dev tools on browser
const devToolsExtension: StoreEnhancer = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;

export const store = createStore<IAppState, Action<any>, object, object>(reducer, compose(devToolsExtension) as StoreEnhancer);


/*
 Redux is a pattern and library for managing and updating application state, using events called "actions".
 It serves as a centralized store for state that needs to be used across your entire application,
 with rules ensuring that the state can only be updated in a predictable fashion.

 The patterns and tools provided by Redux make it easier to understand when, where, why,
 and how the state in your application is being updated, and how your application logic will behave when those changes occur.

 Redux is more useful when:
  1- You have large amounts of application state that are needed in many places in the app
  2- The app state is updated frequently over time
  3- The logic to update that state may be complex
  4- The app has a medium or large-sized codebase, and might be worked on by many people

 Immutability
  JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields.
  In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.
*/

/*
 Terminology:
 - Actions
  An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
  The type field should be a string that gives this action a descriptive name, like "todos/todoAdded".
  An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

 - Action Creators
  An action creator is a function that creates and returns an action object.

 - Reducers
  A reducer is a function that receives the current app state and an action object, decides how to update the state if necessary,
  and returns the new state: (state, action) => newState.
  Reducers must always follow some specific rules:
    - They should only calculate the new state value based on the state and action arguments
    - They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
    - They must not do any asynchronous logic, calculate random values, or cause other "side effects"

 - Store
  The current Redux application state lives in an object called the store.
  The store is created by passing in a reducer, and has a method called getState that returns the current state value.
  A Redux store runs the root reducer whenever an action is dispatched.

 - Dispatch
  The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object.
  The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value.
  You can think of dispatching actions as "triggering an event" in the application.

 - Selectors
  Selectors are functions that know how to extract specific pieces of information from a store state value.
  As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data.
*/

/*
 Redux Application Data Flow:
  Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:
    - State describes the condition of the app at a specific point in time
    - The UI is rendered based on that state
    - When something happens (such as a user clicking a button), the state is updated based on what occurred
    - The UI re-renders based on the new state
*/

/*
Flux
 Redux was inspired by several important qualities of Flux.
 Like Flux, Redux prescribes that you concentrate your model update logic in a certain layer of your application (“stores” in Flux, “reducers” in Redux).

Elm
 Elm is a functional programming language inspired by Haskell and created by Evan Czaplicki.
 It enforces a “model view update” architecture, where the update has the following signature: (action, state) => state. Elm “updaters” serve the same purpose as reducers in Redux.

Immutable
 Immutable is a JavaScript library implementing persistent data structures. It is performant and has an idiomatic JavaScript API.
 Redux doesn't care how you store the state—it can be a plain object, an Immutable object, or anything else.

Baobab
 Baobab is another popular library implementing immutable API for updating plain JavaScript objects.
 While you can use it with Redux, there is little benefit in using them together.
 Most of the functionality Baobab provides is related to updating the data with cursors,
 but Redux enforces that the only way to update the data is to dispatch an action.

RxJS
 RxJS is a superb way to manage the complexity of asynchronous apps.
 In fact there is an effort to create a library that models human-computer interaction as interdependent observables.
 Does it make sense to use Redux together with RxJS? Sure! They work great together.
*/

// add redux dev tools from https://github.com/zalmoxisus/redux-devtools-extension
