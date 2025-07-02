# 100 Days ReactJS Challenge

## Day 2: Creating Nested and Sibling Elements in ReactJS

### Goal: Understanding React element structure and DOM rendering

### Key Learning Points:

#### 1. React Element Creation vs DOM Rendering
- **`React.createElement()`** only creates JavaScript objects (React elements)
- **Rendering** converts these objects into actual HTML elements in the browser
- React elements are virtual representations that get transformed into real DOM nodes

#### 2. Creating Sibling Elements
When you need multiple elements at the same level, you can:
- Use an array of elements
- Wrap them in a parent container
- Use React Fragment (will learn later)

#### 3. Script Loading Order Matters! ⚠️
The order of script references in your HTML file is crucial:
1. **React CDN libraries first** (react.development.js, react-dom.development.js)
2. **Your application code last** (app.js)

**Why?** Your app.js file uses React functions, so React must be loaded before your code runs.

### Code Examples:

**Sibling Elements Array Method:**
```javascript
// Alternative: Creating siblings using array (for reference)
const siblingsArray = [
    React.createElement('h3', { key: 'title', className: 'title' }, 'Array Sibling 1'),
    React.createElement('p', { key: 'content', className: 'content' }, 'Array Sibling 2'),
    React.createElement('button', { key: 'button', className: 'btn' }, 'Array Sibling 3')
];
// To render: root.render(siblingsArray);
```

**Nested Elements Example:**
```javascript
// Creating nested structure: div > section > h3 + div > p + button
const nestedElements = React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
        'section',
        { className: 'nested-section' },
        React.createElement('h3', { className: 'section-title' }, 'Nested Header'),
        React.createElement(
            'div',
            { className: 'content-wrapper' },
            React.createElement('p', { className: 'description' }, 'This paragraph is nested inside a div, inside a section, inside a container.'),
            React.createElement('button', { className: 'nested-btn', onClick: () => alert('Nested button clicked!') }, 'Nested Button')
        )
    )
);
// To render: root.render(nestedElements);
```

### Key Takeaways:
- React elements are just JavaScript objects until rendered
- Multiple sibling elements can be created using arrays or parent containers
- Always include the `key` prop when creating arrays of elements
- Script loading order is critical - React libraries before your app code
- Nested elements allow you to create complex UI structures
- Event handlers can be added as props (like `onClick`)

### Common Mistakes to Avoid:
- ❌ Loading app.js before React CDN
- ❌ Forgetting `key` props in element arrays
- ❌ Confusing React element creation with DOM rendering

### Next Steps for Day 3:
- Introduction to JSX syntax
- Converting `React.createElement()` to JSX
- Understanding JSX compilation