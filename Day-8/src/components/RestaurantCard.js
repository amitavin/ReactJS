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

export default RestaurantCard;