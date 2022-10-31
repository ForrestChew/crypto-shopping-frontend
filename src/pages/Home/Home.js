import shopBags from "../../assets/shopping-bags-svg.svg";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__heading-container">
          <h1 className="home__heading">Making Online Shopping</h1>
          <h1 className="home__heading">Simple, since 2022.</h1>
        </div>
        <img id="shop-bags-icon" src={shopBags} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
