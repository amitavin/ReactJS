# ReactJS Component Organization Best Practices 📁

A comprehensive guide to understanding ReactJS best practices for component organization.

### 🎯 Separate Files for Components
**Best Practice**: Create a separate file for each component to maintain clean, organized code.

**Example Structure**:
```
src/
├── components/
│   ├── Header.js
│   ├── Body.js
│   └── RestaurantCard.js
├── utils/
│   ├── constants.js
│   ├── mockData.js
├── App.js
└── index.html
└── index.css
```

### 🗂️ Code Restructuring in ReactJS
**All code should be organized within the `src` folder** - this is the ReactJS standard for project structure.

**Example**:
```
my-react-app/
├── public/
├── src/
├── components/
│   ├── Header.js
│   ├── Body.js
│   └── RestaurantCard.js
├── utils/
│   ├── constants.js
│   ├── mockData.js
├── App.js
└── index.html
└── index.css
└── package.json
```

### 🎨 Moving Beyond App.js
While learning, it's common to put everything in `App.js`, but for real projects, separate components into individual files.

**Example Migration**:
```jsx
// Before: Everything in App.js
function App() {
  return (
    <div>
      <Header />
      <Body />
      <RestaurantCard />
    </div>
  );
}

// After: Separate component files
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <RestaurantCard />
    </div>
  );
}
```

### 📝 File Naming Convention
**Rule**: Keep file names the same as your component names for consistency.

**Example**:
```
Body.jsx → exports Body component
Header.jsx → exports Header component
RestaurantCard.jsx → exports RestaurantCard component
```

### 🔗 Component Export Requirements
Once you create a ReactJS component, you must export it to use it in other files like `App.js`.

**Example**:
```jsx
// UserProfile.jsx
function Body() {
  return <div>User Profile Content</div>;
}

export default Body;
```

### 🚫 Avoid Hardcoded Data
**Best Practice**: Never hardcode data directly in component files. Use props, state, or external data sources.

**Example**:
```jsx
// ❌ Bad - Hardcoded data
function UserList() {
  return (
    <div>
      <h2>John Doe</h2>
      <h2>Jane Smith</h2>
    </div>
  );
}

// ✅ Good - Dynamic data
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
}
```

## 📦 Export/Import Types

### 🏷️ Named Exports
Used when you need to export multiple items from a single file.

**Example**:
```jsx
// Export
export const variable_name = "value";

// Import
import { variable_name } from "path";
```

### 🎯 Default Exports
Used when you have one main item to export from a file (typically components).

**Example**:
```jsx
// Export
export default Component;

// Import
import Component from "path";
```