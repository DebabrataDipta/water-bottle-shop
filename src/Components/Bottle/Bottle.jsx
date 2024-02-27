import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name, img, price, seller, ratings} = bottle;
  return (
    <div className="bottle">
      {/* Your component code goes here */}
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <h4>Price: ${price}</h4>
      <h4> Seller: {seller}</h4>
      <p>Ratings: {ratings}</p>
    </div>
  );
};

export default Bottle;