## useRef Hook
- Refs are special attribute available on all React Components. 
- They allow us to create a reference to a given element/component when the component mounts

- useRef allows us to easily use React refs
- Why to use useRef? 
- The useRef hook allows us to persist values between renders
- It can used to store a mutable value that does not cause a re-render when updated.
- IMP: useRef/refs do not cause re-renders


## useCallback Hook
- useCallback is a hook that is used for improving the component's performance
- Usually, we have a parent component with a state variable, but we want to update that state from a child component. What do we do? We pass a callback function to the child from the parent. That allows us to update the state in the parent component.
- useCallback functions in a similar way as React.memo It memoizes callback functions, so it is not recreated on every re-render. Using useCallback correctly can improve the performance of our app.