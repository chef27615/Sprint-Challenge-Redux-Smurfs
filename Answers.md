1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - Array.object.map(), Array.object.filter(), Array.object.reduce(); Array.object.map() will create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - action: discript the action 
    - reducer: taken the state and action and let them know what they need to do
    - store holds/manages the states for the application, so components share global states will have access, and don't have to have a over bloated state at <App /> 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state allow the application holding/managing states at the application level, and passes down access to states via props.
    - Component state allow a single component to hold/managing state at the component level.
    if only a individual component need the particular state, and no other component in the application needs to access the information, then I should use component state, else I should always manage state at the highest level.

1.  What is middleware?
    - middleware is a function that returns a function that returns a function

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - redux-thunk take the dispatch function back from connect, and allow action-creators to dispatch functions at will.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    - connect 
