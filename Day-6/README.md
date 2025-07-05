# ReactJS Lets start code - 🍕 Food Ordering App 

## 🚀 Getting Started with ReactJS Development

### 📱 Building a Real-Time Food Ordering App

#### 📋 Planning Phase
- **Know your goal**: Understand what you're building and how you'll implement it
- **Create wireframes**: Visual representation of your app's structure
- **Component breakdown**: Divide your app into reusable components based on the wireframe

#### 🏗️ Main Component Structure

##### 🎯 Header Component
- **Logo**: Brand identity and navigation anchor
- **Navigation items**: Menu links for different sections

```jsx
const Header = () => (
  <div className="header">
    <div className="logo">🍕 FoodHub</div>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  </div>
);
```

##### 🏠 Body Component
- **Search input area**: Filter restaurants or dishes
- **Restaurant container**: Main content area
  - **Card container**: Individual restaurant cards
    - Restaurant image
    - Restaurant name
    - Description
    - Rating (⭐)
    - Delivery time (🕒)

##### 🦶 Footer Component
- **Copyright**: Legal information and year
- **Footer links**: Additional navigation options
- **Address**: Physical location information
- **Contacts**: Phone, email, social media links

## 🔄 Dynamic Restaurant Cards with Props

### 📦 Understanding Props
- **Definition**: Props (short for "properties") are arguments passed to React components
- **Purpose**: Enable component reusability by passing different data to the same component
- **Similarity**: Just like passing arguments to regular JavaScript functions
- **Flow**: Data flows from parent component to child component

#### 🎯 Props Destructuring Example
```jsx
// Without destructuring
const RestaurantCard = (props) => {
  return <h3>{props.restaurant.name}</h3>;
};

// With destructuring (recommended)
const RestaurantCard = ({ restaurant }) => {
  const { name, rating, deliveryTime } = restaurant;
  return (
    <div>
      <h3>{name}</h3>
      <div>⭐ {rating}</div>
      <div>🕒 {deliveryTime}</div>
    </div>
  );
};
```

#### 🔄 Using the Same Card for Different Restaurants
```jsx
// Parent component passing different data
<RestaurantCard restaurant={{name: "Pizza Palace", rating: 4.5}} />
<RestaurantCard restaurant={{name: "Burger Barn", rating: 4.2}} />
```

## ⚙️ Config-Driven UI

### 🎛️ What is Config-Driven UI?
- **Definition**: A design pattern where the user interface adapts and behaves differently based on external data/configuration
- **Benefits**: 
  - Dynamic content without code changes
  - Personalized user experiences
  - Easy content management

### 📊 Dynamic Data Binding with Array
- **Use JavaScript's `.map()` method** to bind restaurant list array with restaurant cards
- **Destructure props** to extract properties cleanly

#### 🔄 Array Binding Example
```jsx
const restaurants = [
  {id: 1, name: "Pizza Palace", rating: 4.5},
  {id: 2, name: "Burger Barn", rating: 4.2}
];

// Using map to render multiple cards
{restaurants.map(restaurant => (
  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
))}
```

#### 🎯 Config-Driven Example
```jsx
// Configuration object
const appConfig = {
  showSearch: true,
  maxRestaurants: 10,
  theme: "dark"
};

// UI adapts based on config
{appConfig.showSearch && <SearchBar />}
{restaurants.slice(0, appConfig.maxRestaurants).map(...)}
```

## 🎯 Key Takeaways
- **Plan first**: Create wireframes before coding
- **Component reusability**: Use props to make components dynamic
- **Data-driven**: Let configuration control UI behavior
- **Destructuring**: Clean way to extract props
- **Map method**: Essential for rendering lists in React