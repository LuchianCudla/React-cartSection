import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h3 className="item-price">${price}</h3>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          Remove
        </button>
      </div>
      <div className="arrows">
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          <RiArrowUpSLine />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decreaseAmount(id)}>
          <RiArrowDownSLine />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
