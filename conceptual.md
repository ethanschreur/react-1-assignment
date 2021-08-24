### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front end framework. It allows for greater re-use of code through components, and lets you write html in js files.

- What is Babel?
Babel is a compiler that turns ES2015+ js into old js.

- What is JSX? A language that lets you write html in js files.

- How is a Component created in React?
Either through functions or classes with a render method. The function or method can return html or other components with their html.

- What are some difference between state and props?
State is like a variable that can change and trigger certain things to happen like component re-renders. Props are unmuteable once the component is rendered and cannot change.

- What does "downward data flow" refer to in React?
Downward data flow refers to sending properties down from higher order components to lower child components.

- What is a controlled component?
A controlled component is a component in which react controls the state. 

- What is an uncontrolled component?
Uncontrolled components happen when react is not in control of the state.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is like a unique identifier for each item in the list. We need it to avoid errors.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
You can use index but if you change the order or the array or add/remove items, the index would likely need to be re-assigned.

- Describe useEffect.  What use cases is it used for in React components?
UseEffect takes a list of dependencies and when the state controlled dependencies change, the useEffect method runs again. It runs at the beginning when the component is compiled once.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
UseRef can be used to make a reference to a component or an element in the html. There are no-re-renders.

- When would you use a ref? When wouldn't you use one?
Use a ref when want to access an underlying DOM element. It could be used to set up with timers.

- What is a custom hook in React? When would you want to write one?
Custom hooks are used often to allow for greater re-use of state and methods by more than one component.
