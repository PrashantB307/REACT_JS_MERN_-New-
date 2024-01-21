import "./App.css";
import NavBar from "./layout/NavBar";
import ProductCart from "./components/ProductCart";



const App = () => {
  return (
    <>
      <NavBar value={"BootStrap Style"} color = {"bg-success"}/>

      <ProductCart/>
    </>
  );
};

export default App;
