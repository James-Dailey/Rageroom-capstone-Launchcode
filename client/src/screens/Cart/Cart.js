import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";

const Index = (props) => {
  return (
    <>
      <Navbar cart={props.cart} />

      <Cart
        items={props.items}
        cart={props.cart}
        handleAddCard={props.handleAddCard}
      />

      <Footer />
    </>
  );
};

export default Index;
