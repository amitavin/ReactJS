import RestaurantCard from "./RestaurantCard";
import resList  from "../utils/mockData";

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

export default Body;