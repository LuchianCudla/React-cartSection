import NavBar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import "../index.css";
const App = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
};

export default App;
