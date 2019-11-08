# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a User Interface library that quickly renders UI and keeps state in sync. In application development there is design pattern that is commonly used called MVC (Model View Controller). ReactJS acts as the view. It's purpose was to decouple monolithic architecture and make components more reusable and smaller. With a smaller decoupled components comes readablility for developers and a potential faster development cycle.

1. What does it mean to think in react?

Thinking in react is to think about components having to do one thing and only one thing. Working in components we only have to think about the what goes into that component and nothing else. What's nice about the react way of thinking is it's declarative. Meaning instead of building out objects to use, we can ask react to do something for us and it should already have the objects and tools do it. 

1. Describe state.

State is data that gets injected and may change throughout the lifecycle of the react component. It can only be accesses or modified inside the component.

1. Describe props.

Props also know as properties are an object of abstract inputs that gets injected into the component to be used. Properties are not allowed to be changed. They are readable only.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that affect something outside of scope of a function being invoked. Examples of that are network requests, DOM manipulation, or just a simple console.log. How we sync the effects in react components is to use Effect Hooks. Effect hooks manage props and state for the view. useEffect and useState manages state and properties by placeing them into the function. I see useEffects and useState as notification centers where whatever state and propeties inside the method will register the state and properties as observable objects and wait to see if there properties change. If they do change, the method will fire and re-render the page with the update.