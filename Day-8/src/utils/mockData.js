import {RESTAURANT_CARD_IMAGE_URL_1} from "./constants";
import {RESTAURANT_CARD_IMAGE_URL_2} from "./constants";  
// This file contains mock data for restaurant listings
// It exports an array of restaurant objects, each containing details like name, image, description,
const resList = [
  {
    "name": "Burger King",
    "image": RESTAURANT_CARD_IMAGE_URL_1,
    "description": "Delicious burgers and fries",
    "rating": 4.5,
    "deliveryTime": 30
  },
  {
    "name": "McDonald's",
    "image": RESTAURANT_CARD_IMAGE_URL_2,
    "description": "Famous for Big Macs and crispy fries",
    "rating": 4.2,
    "deliveryTime": 25
  },
  {
    "name": "KFC",
    "image": RESTAURANT_CARD_IMAGE_URL_1,
    "description": "Crispy fried chicken and sides",
    "rating": 4.3,
    "deliveryTime": 35
  },
  {
    "name": "Domino's Pizza",
    "image": RESTAURANT_CARD_IMAGE_URL_2,
    "description": "Hot and fresh pizzas delivered fast",
    "rating": 4.0,
    "deliveryTime": 28
  },
  {
    "name": "Subway",
    "image": RESTAURANT_CARD_IMAGE_URL_1,
    "description": "Freshly made subs and salads",
    "rating": 3.5,
    "deliveryTime": 20
  },
  {
    "name": "Pizza Hut",
    "image": RESTAURANT_CARD_IMAGE_URL_2,
    "description": "Tasty pizzas with cheesy crusts",
    "rating": 3.8,
    "deliveryTime": 30
  },
  {
    "name": "Taco Bell",
    "image": RESTAURANT_CARD_IMAGE_URL_1,
    "description": "Mexican-inspired fast food",
    "rating": 4.0,
    "deliveryTime": 22
  },
  {
    "name": "Starbucks",
    "image": RESTAURANT_CARD_IMAGE_URL_2,
    "description": "Coffee, pastries, and sandwiches",
    "rating": 4.4,
    "deliveryTime": 18
  },
  {
    "name": "Papa John's",
    "image": RESTAURANT_CARD_IMAGE_URL_1,
    "description": "Better ingredients. Better pizza.",
    "rating": 4.1,
    "deliveryTime": 27
  },
  {
    "name": "Dunkin'",
    "image": RESTAURANT_CARD_IMAGE_URL_2,
    "description": "Donuts, coffee, and breakfast items",
    "rating": 3.9,
    "deliveryTime": 15
  }
  ];

  export default resList;