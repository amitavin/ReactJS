import React from 'react';
import ReactDOM from 'react-dom/client';    

//react.createElement() is used to create a React element which is a object representation of a DOM node.
// It is the building block of React applications and is used to describe what the UI should look like.
// The createElement function takes three arguments: type, props, and children. 
// It takes three arguments: type, props, and children.
const heading = React.createElement(
    'h1',
    { className: 'greeting', id: 'greeting-id' },
    'Hello world from ReactJS! 🚀'
);

// ReactDOM.render() is used to render a React element into the DOM.

const jsxHeading = <h2 className="heading" >JSX Heading 🚀</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);