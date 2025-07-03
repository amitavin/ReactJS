# ReactJS Day-5 📚

## React Components 🧩

### Types of Components 📝
React has two main types of components:

1. **Class-based Components** 🏛️ - The older way of creating components using ES6 classes
2. **Functional Components** ⚡ - The modern way to create components using JavaScript functions

## React Functional Components 🎯

### Key Rules and Characteristics 📋
- **Naming Convention**: Always start component names with a **Capital letter**
- **Return Value**: Must return JSX (React elements)
- **Function Type**: Typically created as arrow functions
- **Definition**: Any JavaScript function that returns JSX is considered a functional component

### Basic Syntax 💻
```jsx
// Standard arrow function syntax
const HeadingComponent = () => {
  return <h1>This is functional Heading component</h1>;
}

// Shorthand syntax (implicit return)
const HeadingComponent = () => <h1>This is functional Heading component</h1>;
```

## Rendering React Components 🎨

### How to Render Components 🚀
Babel provides syntax to render React functional components:

```jsx
// Rendering a component
root.render(<HeadingComponent />);
```

**Important**: Notice the self-closing tag syntax `<ComponentName />` or `<ComponentName></ComponentName>`

## Component Composition 🔗

### What is Component Composition? 🤔
Component composition occurs when you put one React component inside another React component. This is a fundamental pattern in React for building complex UIs from simpler components.

### Example 💡
```jsx
const Title = () => <h1>Welcome to React</h1>;

const App = () => {
  return (
    <div>
      <Title />  {/* Component inside another component */}
      <p>This is component composition!</p>
    </div>
  );
};
```

## JavaScript Expressions in JSX 🔧

### Injecting JavaScript into Components ⚡
You can inject any JavaScript expression into JSX using curly braces `{}`.

### Example 💻
```jsx
const number = 21;
const name = "React Developer";

const HeadingComponent = () => {
  return (
    <div>
      <h3>This is title</h3>
      <h5>Number: {number}</h5>
      <p>Hello, {name}!</p>
      <p>Calculation: {10 + 5}</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};
```

### What You Can Use in JSX 📌
- Variables
- Function calls
- Mathematical expressions
- Conditional operators (ternary)
- Array methods (map, filter, etc.)
- Any valid JavaScript expression

## Cross-Site Scripting (XSS) Protection 🛡️

### JSX Security Features 🔒
- **Auto-Sanitization**: JSX automatically sanitizes all data before rendering to prevent XSS attacks
- **Safe by Default**: When data is pulled from APIs or user input, JSX escapes potentially dangerous content
- **Protection Against**: Malicious scripts, HTML injection, and other security vulnerabilities

### How It Works 🔍
```jsx
const userInput = "<script>alert('XSS Attack!')</script>";

const SafeComponent = () => {
  return (
    <div>
      {/* This will be rendered as plain text, not executed */}
      <p>{userInput}</p>
    </div>
  );
};
```

**Result**: The script tag will be displayed as text, not executed as JavaScript, protecting your application from XSS attacks.

## Best Practices 🌟

### Component Development Tips 💡
1. **Keep components small and focused** - Each component should have a single responsibility
2. **Use descriptive names** - Component names should clearly indicate their purpose
3. **Leverage composition** - Build complex UIs by combining simpler components
4. **Utilize JavaScript expressions** - Make your components dynamic with JavaScript logic
5. **Trust JSX security** - Rely on JSX's built-in XSS protection for safe rendering