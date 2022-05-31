import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "./context";

const NavBar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h2>Cart</h2>
        <div className="nav-container">
          <FiShoppingCart />
        </div>
        <div className="amount-container">
          <p className="tot-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
