import { useParams } from "react-router-dom";
import { useSingleProduct } from "./useSingleProduct";
import { capitalizeStr, numToPrice, priceToTopDealPrice } from "../../utils";
import Notification from "../../components/Notification/Notification";
import Footer from "../../components/Footer/Footer";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const {
    product,
    imgUrl,
    isLoading,
    quantity,
    adjustQuantity,
    handleAddToCart,
    errorType,
    showError,
  } = useSingleProduct(id);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="product">
          <section className="product__view">
            <img
              id="product__img"
              src={imgUrl}
              alt=""
              width="1024px"
              height="640px"
            />
          </section>
          <section className="product__info">
            <h2>
              {capitalizeStr(product.title)} -{" "}
              {product.is_top_deal ? (
                <>
                  <s>{numToPrice(product.price)}</s>{" "}
                  {priceToTopDealPrice(product.price)}
                </>
              ) : (
                numToPrice(product.price)
              )}
            </h2>
            <ul className="product__list">
              <li>Category: {product.category}</li>
              <li>In Stock: {product.quantity}</li>
              <li>Product ID: {product.id}</li>
            </ul>
            <p>{product.description}</p>
            <div className="product__qty-selector">
              <span>Qty: {quantity}</span>
              <button onClick={() => adjustQuantity(-1)}>-</button>
              <button onClick={() => adjustQuantity(1)}>+</button>
            </div>
            <button
              className="btn"
              onClick={() => handleAddToCart(product.id, quantity)}
            >
              Add to Cart
            </button>
            {showError && <Notification isSuccess={errorType} />}
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Product;
