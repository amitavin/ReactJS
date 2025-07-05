import RestaurantCard from "./RestaurantCard";
import resList  from "../utils/mockData";
import {useState} from "react"; 

// Body component that contains the search bar and restaurant cards
// It renders a search input and a button, and maps over the resList to display each restaurant using the RestaurantCard component.
const Body = () => {

//state variable to hold the list of restaurants

const [listOfRestaurants,setListOfRestaurants] = useState(resList);

  return (
    <div className="app-body">
    <div className="app-search-container">
        <input type="text" placeholder="Search for restaurants..." />
        <button className="food-search-button">Search</button>
    </div>
    <div className="filter">
        <button className="sort-button" onClick={() => {
const filteredRestaurants = listOfRestaurants.filter((restaurant) => restaurant.rating > 4.0);
          setListOfRestaurants(filteredRestaurants);

          }}>Sort by Rating 🗄️</button>
    </div>

    <div className="app-restaurants-container">
        {listOfRestaurants.map((restaurant,index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
    </div>
    </div>
  );
};  

export default Body;