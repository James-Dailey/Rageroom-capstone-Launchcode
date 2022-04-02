import Home from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Index = (props) => {
  return (
    <>
      <Navbar cart={props.cart} />

      <Home items={props.items} handleAddCard={props.handleAddCard} />

      <Footer />
    </>
  );
};

export default Index;
