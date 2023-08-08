//Functional Components:
A React functional component is a pure JavaScript function that returns one or more JSX elements.
JSX is the way you write HTML in React, so JSX elements are also HTML elements.

  const FunctionalComponent = () => {
    return ( <
        div >
        <
        h1 > Sololearn < /h1> <
        p >
        You can write codes in any programming language on Sololearn <
        /p> <
        /div>
    );
};

export default FunctionalComponent;

//Class Componenets:

, a React class component is a JavaScript class. To make sure that the class inherits everything from React, it has to extend React.
  To return JSX in a class component, you use the render method.

  import React from "react";

class ClassComponent extends React.Component {
    render() {
        return ( <
            div >
            <
            h1 > Sololearn < /h1> <
            p > This is a class component < /p> <
            p >
            You can write codes in any programming language on Sololearn <
            /p> <
            /div>
        );
    }
}
export default ClassComponent;






  
