import './Bottle.css'
import PropType from 'prop-types'
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price, seller, ratings} = bottle;
    // console.log(bottle);
  return (
    <div className="bottle">
      {/* Your component code goes here */}
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <h4>Price: ${price}</h4>
      <h4> Seller: {seller}</h4>
      <p>Ratings: {ratings}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};
Bottle.propTypes = {
    bottle: PropType.object.isRequired,
    handleAddToCart: PropType.func.isRequired
}
export default Bottle;