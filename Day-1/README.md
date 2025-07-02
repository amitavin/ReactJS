# 100 Days ReactJS Challenge

## Day 1: Creating Your First ReactJS Program

### Goal: Building a "Hello World!" application

### Step-by-Step Process:

#### 1. Create HTML Page Structure
- Set up basic HTML boilerplate
- Create a container element for React to render into

#### 2. Add ReactJS CDN References from [React CDN](https://legacy.reactjs.org/docs/cdn-links.html)
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
Include the following script tags in your HTML:
- **react.development.js**: Core ReactJS library containing fundamental React functionality
- **react-dom.development.js**: ReactJS DOM library required for DOM operations and rendering

#### 3. Core React Concepts Learned

##### React.createElement()
- Used to create React elements, which are the building blocks of React applications
- Core functionality that allows you to describe what you want to see on the screen
- Syntax: `React.createElement(type, props, children)`

##### ReactDOM.createRoot()
- ReactDOM is the library responsible for rendering React components to the browser's DOM
- `createRoot()` creates a root container for rendering React elements
- Manages rendering and updating the DOM based on React components

#### 4. Working with Props
- **Props** are properties or attributes passed to React elements
- Examples: `className`, `id`, `style`, etc.
- Props are key-value pairs used to configure React elements
- They allow you to pass data and configuration to components

#### 5. Styling Approaches
- Write styles in separate CSS files and reference them
- Use `className` prop (not `class`) to apply CSS classes to React elements

### Code Example:
```javascript
const element = React.createElement(
    'h1',
    { 
        className: 'greeting',
        id: 'greeting-id'
    },
    'Hello world from ReactJS!'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

### Key Takeaways:
- React uses a virtual DOM to efficiently update the browser's DOM
- `React.createElement()` is the foundation for creating UI elements
- Props provide a way to pass data and attributes to React elements
- ReactDOM bridges React elements with the actual browser DOM
- Always use `className` instead of `class` in React (JSX convention)

### Next Steps for Day 2:
- Explore JSX syntax as an alternative to `React.createElement()`
- Learn about functional components
- Practice with more complex element structures