
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";



function App() {
  return (
    <div className="App">
      <ProductList/>
      <hr/>
      <Cart/>
    </div>
  );
}

export default App;
