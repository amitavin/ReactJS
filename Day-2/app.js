// app.js - Combined sibling and nested elements example

// Creating a complete application with both sibling and nested elements
const completeApp = React.createElement(
    'div',
    { className: 'main-app' },
    
    // Header section with nested elements
    React.createElement(
        'header',
        { className: 'header' },
        React.createElement('h1', { className: 'app-title' }, 'Day 2 - Nested & Sibling Elements in ReactJS'),
        React.createElement(
            'nav',
            { className: 'navigation' },
            React.createElement(
                'ul',
                { className: 'nav-list' },
                React.createElement('li', { key: 'home' }, 'Home'),
                React.createElement('li', { key: 'about' }, 'About'),
                React.createElement('li', { key: 'contact' }, 'Contact')
            )
        )
    ),
    
    // Main content section with sibling elements
    React.createElement(
        'main',
        { className: 'main-content' },
        React.createElement('h2', { className: 'section-title' }, 'Sibling Elements Section'),
        
        // Multiple sibling elements at the same level
        React.createElement('h3', { className: 'title' }, 'First Sibling Element'),
        React.createElement('p', { className: 'content' }, 'This is the first paragraph sibling.'),
        React.createElement('p', { className: 'content' }, 'This is the second paragraph sibling.'),
        React.createElement('button', { 
            className: 'btn', 
            onClick: () => alert('Button clicked!') 
        }, 'Click Me - Third Sibling'),
        
        // Nested structure within main content
        React.createElement(
            'section',
            { className: 'nested-section' },
            React.createElement('h3', { className: 'section-title' }, 'Nested Elements Section'),
            React.createElement(
                'div',
                { className: 'card-container' },
                React.createElement(
                    'div',
                    { className: 'card' },
                    React.createElement('h4', null, 'Card Title'),
                    React.createElement('p', null, 'This is a nested card with multiple levels of nesting.'),
                    React.createElement(
                        'div',
                        { className: 'card-actions' },
                        React.createElement('button', { className: 'btn btn-primary' }, 'Action 1'),
                        React.createElement('button', { className: 'btn btn-secondary' }, 'Action 2')
                    )
                )
            )
        )
    ),
    
    // Footer section (another sibling to header and main)
    React.createElement(
        'footer',
        { className: 'footer' },
        React.createElement('p', null, '© 2025 ReactJS Learning Journey - Day 2'),
        React.createElement('p', null, 'Demonstrating both sibling and nested elements')
    )
);

// Render the complete application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(completeApp);