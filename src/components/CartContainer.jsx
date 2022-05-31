import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearItems } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <div>
          <h2>Your cart</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <div>
        <h2>your cart</h2>
      </div>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <h4>
            Total <span>$ {total}</span>
          </h4>
          <button className="clear-btn" onClick={clearItems}>
            Clear Items
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
