## React.memo

- Definition - It is a higher order component that we can use to wrap components that we do not want to re-render unless props within them change
- It's a higher order Higher Order Component
- Memoization - Storing output of expensive functions


## useMemo
- Definition - useMemo() is a React hook that we use to wrap functions within a component.
- We can use this to ensure that the values within that function are re-computed only when one of it's dependencies change.

### Caution
Use memoization when you absolutely need those performance gains. It uses up memory space on the machine space on the machine it's begin run on and, as such, may lead to unintended effects.

## UseEffect

- It lets us perform side effects in functional components. What are side effects?
- Side effects are where we need to reach into the outside world. For e.g. fetching data from an API or working with the DOM.
- Side effects are actions that can change our component state in an unpredictable fashion 
- useEffect accepts a callback function (called the 'effect' function), which will by default run every time there is a rerender 

<pre>
useEffect(()=>{

    //effect
    define the effect here


    // cleanup
    // We unsubscribe any subscription (listeners, intervals)
    return ()
},[dependency])
</pre>
