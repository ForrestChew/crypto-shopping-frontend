import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "./useGetSingleProduct";
import { capitalizeStr, numToPrice, priceToTopDealPrice } from "../../utils";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const { product, imgUrl, isLoading } = useGetSingleProduct(id);
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
            <button className="btn">Add to Cart</button>
          </section>
        </div>
      )}
    </>
  );
};

export default Product;
