import React from "react";
import ReactDOM from "react-dom/client";

//header compoent
const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo" src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png" alt="React Logo" />
      </div>
        <div className="app-nav-items">
            <ul>
                <li><a>Home</a> </li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>Cart🛒</a></li>
            </ul>
            </div>
    </div>
  );
}

// RestaurantCard component to display individual restaurant details
// It receives resData as props and destructures it to extract properties
const RestaurantCard = (props) => {
    const {resData} = props;
    // Destructuring the resData object to extract properties
    const { name, image, description, rating, deliveryTime } = resData;
  return (
    <div className="restaurant-card">
      <img alt="burger-king" src={image}  />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Delivery Time: {deliveryTime} mins</p>
    </div>
  );
};

// Sample data for restaurants
// This is an array of restaurant objects, each containing details like name, image, description, rating, and delivery time.
const resList = [
  {
    "name": "Burger King",
    "image": "https://images.pexels.com/photos/26161037/pexels-photo-26161037/free-photo-of-omelette-with-vegetable-salad.jpeg",
    "description": "Delicious burgers and fries",
    "rating": 4.5,
    "deliveryTime": 30
  },
  {
    "name": "McDonald's",
    "image": "https://images.pexels.com/photos/839008/pexels-photo-839008.jpeg",
    "description": "Famous for Big Macs and crispy fries",
    "rating": 4.2,
    "deliveryTime": 25
  },
  {
    "name": "KFC",
    "image": "https://images.pexels.com/photos/26161037/pexels-photo-26161037/free-photo-of-omelette-with-vegetable-salad.jpeg",
    "description": "Crispy fried chicken and sides",
    "rating": 4.3,
    "deliveryTime": 35
  },
  {
    "name": "Domino's Pizza",
    "image": "https://images.pexels.com/photos/839008/pexels-photo-839008.jpeg",
    "description": "Hot and fresh pizzas delivered fast",
    "rating": 4.0,
    "deliveryTime": 28
  },
  {
    "name": "Subway",
    "image": "https://images.pexels.com/photos/26161037/pexels-photo-26161037/free-photo-of-omelette-with-vegetable-salad.jpeg",
    "description": "Freshly made subs and salads",
    "rating": 4.1,
    "deliveryTime": 20
  },
  {
    "name": "Pizza Hut",
    "image": "https://images.pexels.com/photos/839008/pexels-photo-839008.jpeg",
    "description": "Tasty pizzas with cheesy crusts",
    "rating": 4.2,
    "deliveryTime": 30
  },
  {
    "name": "Taco Bell",
    "image": "https://images.pexels.com/photos/26161037/pexels-photo-26161037/free-photo-of-omelette-with-vegetable-salad.jpeg",
    "description": "Mexican-inspired fast food",
    "rating": 4.0,
    "deliveryTime": 22
  },
  {
    "name": "Starbucks",
    "image": "https://images.pexels.com/photos/839008/pexels-photo-839008.jpeg",
    "description": "Coffee, pastries, and sandwiches",
    "rating": 4.4,
    "deliveryTime": 18
  },
  {
    "name": "Papa John's",
    "image": "https://images.pexels.com/photos/26161037/pexels-photo-26161037/free-photo-of-omelette-with-vegetable-salad.jpeg",
    "description": "Better ingredients. Better pizza.",
    "rating": 4.1,
    "deliveryTime": 27
  },
  {
    "name": "Dunkin'",
    "image": "https://images.pexels.com/photos/839008/pexels-photo-839008.jpeg",
    "description": "Donuts, coffee, and breakfast items",
    "rating": 4.3,
    "deliveryTime": 15
  }
  ];

// Body component that contains the search bar and restaurant cards
// It renders a search input and a button, and maps over the resList to display each restaurant using the RestaurantCard component.
const Body = () => {
  return (
    <div className="app-body">
    <div className="app-search-container">
        <input type="text" placeholder="Search for restaurants..." />
        <button className="food-search-button">Search</button>
    </div>
    <div className="app-restaurants-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.name} resData={restaurant} />
        ))}
    </div>
    </div>
  );
};

// AppLayout component that combines Header and Body components
// It serves as the main layout of the application, rendering the header at the top and the body below it.
const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
        <Body />    
    </div>
  );
};

// Rendering the AppLayout component into the root element of the HTML
// This is the entry point of the React application, where the AppLayout is mounted to the DOM.
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
