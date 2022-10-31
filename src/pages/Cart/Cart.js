import { useCart } from "./useCart";
import Footer from "../../components/Footer/Footer";
import {
  cartPriceIncludingTax,
  priceToTopDealPrice,
  numToPrice,
} from "../../utils";
import "./Cart.css";
const Cart = () => {
  const { cartItems, totalCartPrice, removeCartItem } = useCart();
  return (
    <>
      <div className="cart">
        <section className="cart-container">
          <table className="cart-container__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Category</th>
                <th>Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id} className="cart-contianer__entry">
                    <td>{item.title}</td>
                    <td>
                      {item.is_top_deal
                        ? priceToTopDealPrice(item.price)
                        : item.price}
                    </td>
                    <td>{item.product_quantity}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        className="rem-btn"
                        onClick={() => removeCartItem(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <section>
            <h3>{numToPrice(totalCartPrice)} Total</h3>
            <h2 className="cart-container__total-heading">
              {cartPriceIncludingTax(totalCartPrice)}{" "}
              <em>Total includes 8% tax</em>
            </h2>
            <button className="btn">Order</button>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
