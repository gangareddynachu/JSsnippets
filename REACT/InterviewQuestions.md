Q: What is React JS?
A: ReactJS is a javascript library used to build resuable components.It is highly efficient and uses virtual DOM to render components. It works on the client side and is written in the JSX

Q:Explain Model View Controller (MVC) architecture?
A: MVC framework is an architectural/design pattern that seperates the application into three maain logical components Model/ View and Controller
Each architectural compoent is build to handle specific development aspects of an application. It isolates business logic and presentation logic from each other

Q:Explain the building blocks of React?
A: The five main building blocks of react are 
1) Components : These are the resuable blocks that can return HTML
2) JSX: It stands for Javascript and XML  and it allows to write HTML in React
3) Props and State: props are like function parameters and state is similar to variables
4) Context: This allows data to passed between components as props in hierarchy
6) Virtual DOM: It is lightweight copy of the actual DOM which makes the DOM manipulation easier..

Q:Explain props and State in React with differences:
A; Props are used to pass data from one component to another component.
The state is local data storage that is local to the component only and cannot be passed to other components

Props:

The data that is passed from one component to another
It is immutable, cannot be modifed
Props can be used with state(Class) and functional components
Props are read only

State:

The daata is passed within the compoennt only
it is mutable
It is only used in state/class compoennt before react v16 but now functional also supports using sttate varaibles
state is booth read and write

Q What is virtual DOM
A React uses virtual DOM which is lighweight copy of actual DOM so for every object that exists in the DOM there is an object for that in React Virtual DOM
It is same but it doesnt have power to directly change the DOM.
changing DOM diectly is slow , but manipulating virtual DOM is fast as nothing gets drawn on the screen
So each time there is change in the state of our application, virtual DOM gets updated first instead of real DOM

Q What is JSX?
A JSX is basically a syntax extension of javscript and is used to create React elements.These eleememts are then rendered to React DOM. All React components are 
written in JSX. To embed any javascript expression in a piece of code written in JSX, we will have to wrap that extension in curly braches{}
const name = "Learner";

const element = (
  <h1>
    Hello,
    {name}.Welcome to GeeksforGeeks.
  </h1>
);


    

